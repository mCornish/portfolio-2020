import { IoIosPaper as icon } from 'react-icons/io';

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What is it called?',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'typeObject',
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
      name: 'markdown',
      title: 'Markdown Content',
      type: 'markdown',
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
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topic' }] }],
    },
    {
      name: 'date',
      title: 'Manual Date (Optional)',
      type: 'date',
      description: 'If included, this will replace the created date',
    },
  ],
};
