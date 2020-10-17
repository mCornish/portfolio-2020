import { FaTags as icon } from 'react-icons/fa';

export default {
  name: 'topic',
  title: 'Topics',
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
