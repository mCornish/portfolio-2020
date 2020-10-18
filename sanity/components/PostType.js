import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import { setIfMissing } from 'part:@sanity/form-builder/patch-event';
// FormBuilderInput automatically generates fields from a schema
import { FormBuilderInput } from 'part:@sanity/form-builder';
// a Higher Order Component that passes document values as props
import { withDocument } from 'part:@sanity/form-builder';
import S from '@sanity/desk-tool/structure-builder';
import 'isomorphic-fetch';

const gql = String.raw;

function CustomObjectInput({
  type,
  level,
  value,
  focusPath,
  onFocus,
  onChange,
  onBlur,
}) {
  const typeField = type.fields.find((field) => field.name === 'type');
  const postTypes = useRef([]);
  const [selectedPostType, setSelectedPostType] = useState();

  useEffect(() => {
    fetch('https://ftec7ll7.api.sanity.io/v1/graphql/production/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            allPostType {
              _id
              name
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        postTypes.current = data.allPostType;
        if (!(value && value[typeField.name])) return undefined;

        // Set the currently selected post type
        const selected = data.allPostType.find(
          ({ _id }) => _id === value[typeField.name]
        );
        setSelectedPostType(selected);
      });
  }, []);

  // const firstFieldInput = null;
  console.log('S', S.documentListItem().schemaType('postType'));
  const handleFieldChange = (field, fieldPatchEvent) => {
    console.log('handleFieldChange -> fieldPatchEvent', fieldPatchEvent);
    // Whenever the field input emits a patch event, we need to make sure to each of the included patches
    // are prefixed with its field name, e.g. going from:
    // {path: [], set: <nextvalue>} to {path: [<fieldName>], set: <nextValue>}
    // and ensure this input's value exists
    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    );

    const postTypeId = fieldPatchEvent.patches.find(
      ({ type: patchType }) => patchType === 'set'
    ).value;
    setSelectedPostType(
      postTypes.current.find(({ _id }) => _id === postTypeId)
    );
  };

  // const focus = () => {
  //   firstFieldInput.focus();
  // };

  console.log({ document, type, value, level, focusPath });

  return (
    <>
      <FormBuilderInput
        level={1}
        // ref={firstFieldInput}
        type={typeField.type}
        value={value && value[typeField.name]}
        onChange={(patchEvent) => handleFieldChange(typeField, patchEvent)}
        path={[typeField.name]}
        focusPath={focusPath}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {/* <Fieldset
        level={level}
        legend={type.title}
        description={type.description}
        isCollapsible={!!type.options && !!type.options.collapsible}
        isCollapsed={!!type.options && !!type.options.collapsed}
      >
        This is my custom object input with fields */}
      <div>
        {type.fields
          /**
           * You can add any kind of logic here depending on how your
           * schemas look and what you want to do:
           *
           *  {
           *     name: 'aFieldWithConditions',
           *     type: 'object',
           *     inputComponent: conditionalFields,
           *     fields: [
           *       {
           *         name: 'a',
           *         type: 'string'
           *       },
           *       {
           *         name: 'b',
           *         type: 'text'
           *       }
           *     ]
           *   }
           *  Here the field 'b' will show only if the 'condition' boolean is set to true
           */
          .filter((field) => field.name !== 'type')
          .filter(
            (field) => selectedPostType?.name.toLowerCase() === field.type.for
          )
          .map((field, i) => (
            // Delegate to the generic FormBuilderInput. It will resolve and insert the actual input component
            // for the given field type
            <FormBuilderInput
              level={level + 1}
              key={field.name}
              type={field.type}
              value={value && value[field.name]}
              onChange={(patchEvent) => handleFieldChange(field, patchEvent)}
              path={[field.name]}
              focusPath={focusPath}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          ))}
      </div>
      {/* </Fieldset> */}
    </>
  );
}

CustomObjectInput.propTypes = {
  type: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  level: PropTypes.number,
  value: PropTypes.shape({
    _type: PropTypes.string,
  }),
  focusPath: PropTypes.array.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default withDocument(CustomObjectInput);
