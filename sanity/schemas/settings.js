import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'announcement',
      title: 'Announcement',
      type: 'text',
      description: 'Message to display prominently',
    },
    {
      name: 'about',
      title: 'About Text',
      description: 'Text for the About page',
      type: 'markdown',
    },
  ],
};
