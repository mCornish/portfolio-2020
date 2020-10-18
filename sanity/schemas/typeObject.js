import PostType from '../components/PostType';

export default {
  name: 'typeObject',
  type: 'object',
  inputComponent: PostType,
  fields: [
    {
      name: 'type',
      type: 'reference',
      to: [{ type: 'postType' }],
    },
    {
      name: 'chapter',
      title: 'Chapter',
      type: 'number',
      for: 'chapter',
    },
    {
      name: 'appendix',
      title: 'Appendix',
      type: 'string',
      for: 'appendix',
    },
  ],
};
