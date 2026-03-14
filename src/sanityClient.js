import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: '1mcynr7n',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(client);
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
        "imageUrl": image.asset->url,
        "videoUrl": video.asset->url,
        "thumbUrl": thumbnail.asset->url,
      }
    }
  `);
};

export const getAbout = async () => {
  return client.fetch(`
    *[_type == "about"][0] {
      "photoUrl": photo.asset->url,
      intro,
      bio,
      philosophy,
      skills[] { name, percent }
    }
  `);
};