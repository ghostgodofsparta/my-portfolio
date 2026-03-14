import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '1mcynr7n',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export const getProjects = async () => {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      name,
      category,
      description,
      order,
      media[] {
        mediaType,
        image { asset-> { url } },
        video  { asset-> { url } },
        thumbnail { asset-> { url } },
      }
    }
  `);
};

export const getAbout = async () => {
  const results = await client.fetch(`
    *[_type == "about"][0] {
      photo { asset-> { url } },
      intro,
      bio,
      philosophy,
      skills[] { name, percent }
    }
  `);
  return results;
};