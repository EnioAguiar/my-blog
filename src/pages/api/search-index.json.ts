import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const allPosts = await getCollection('blog');

  const searchablePosts = allPosts.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    body: post.body,
  }));

  return new Response(JSON.stringify(searchablePosts), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
