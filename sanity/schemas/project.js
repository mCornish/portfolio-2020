import { IoIosPaper as icon } from 'react-icons/io';

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      description: 'What is it called?',
    },
    {
      name: 'description',
      description: 'What is it?',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Live Link',
      type: 'string',
      description: 'Where can it be seen?',
    },
    {
      name: 'repo',
      title: 'Repository Link',
      type: 'string',
      description: 'Where is the repository?',
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
      name: 'tools',
      title: 'Tools',
      description: 'What was used to make it?',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
