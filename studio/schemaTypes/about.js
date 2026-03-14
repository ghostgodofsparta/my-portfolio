export default {
  name: 'about',
  title: 'About Me',
  type: 'document',
  // Only one "About" document should ever exist
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'photo',
      title: 'My Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'intro',
      title: 'Intro Line',
      type: 'string',
      description: 'The bold opening line e.g. "A passionate visual storyteller..."',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      description: 'Main body paragraph',
    },
    {
      name: 'philosophy',
      title: 'Philosophy / Closing Line',
      type: 'string',
      description: 'The italic pull quote at the bottom',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name',    title: 'Skill Name',       type: 'string' },
            { name: 'percent', title: 'Level (0–100)', type: 'number',
              validation: Rule => Rule.min(0).max(100) },
          ],
          preview: {
            select: { title: 'name', subtitle: 'percent' },
            prepare({ title, subtitle }) {
              return { title, subtitle: `${subtitle}%` };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: { media: 'photo' },
    prepare({ media }) {
      return { title: 'About Me', media };
    },
  },
};
