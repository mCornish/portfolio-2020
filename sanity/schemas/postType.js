import { FaTags as icon } from 'react-icons/fa';

export default {
  name: 'postType',
  title: 'Post Types',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
};
