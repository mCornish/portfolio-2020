import { IoIosPaper as icon } from 'react-icons/io';

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When was this written?',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What is it called?',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'What is it about?',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'text',
      title: 'Text',
      description: 'Get to writing',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'code' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'postType' }],
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
    },
  ],
};
