import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'headline',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'blurb',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'intro',
      title: 'Intro',
      description: 'Who am I?',
      type: 'markdown',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contact',
      title: 'Contact',
      description: 'How can you contact me?',
      type: 'contacts',
    },
  ],
};
