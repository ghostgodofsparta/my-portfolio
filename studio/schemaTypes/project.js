export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Branding & Identity', value: 'branding' },
          { title: 'Motion Design',       value: 'motion'   },
          { title: 'UI/UX Design',        value: 'ui'       },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'media',
      title: 'Media (up to 5 items)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'mediaItem',
          title: 'Media Item',
          fields: [
            {
              name: 'mediaType',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' },
                ],
                layout: 'radio',
              },
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.mediaType !== 'image',
            },
            {
              name: 'video',
              title: 'Video File (MP4)',
              type: 'file',
              options: { accept: 'video/mp4' },
              hidden: ({ parent }) => parent?.mediaType !== 'video',
            },
            {
              name: 'thumbnail',
              title: 'Video Thumbnail',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.mediaType !== 'video',
            },
          ],
          preview: {
            select: { mediaType: 'mediaType', image: 'image' },
            prepare({ mediaType, image }) {
              return {
                title: mediaType === 'video' ? '🎬 Video' : '🖼 Image',
                media: image,
              };
            },
          },
        },
      ],
      validation: Rule => Rule.max(5),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shows first (1–6)',
    },
  ],
  preview: {
    select: { title: 'name', category: 'category', media: 'media.0.image' },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media };
    },
  },
};
