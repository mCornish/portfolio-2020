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
  ],
};
