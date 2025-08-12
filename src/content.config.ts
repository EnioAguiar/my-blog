import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, {
				message: "A data de publicação deve estar no formato completo ISO 8601 (YYYY-MM-DDTHH:MM:SSZ)",
			}).transform((str) => new Date(str)),
			updatedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, {
				message: "A data de atualização deve estar no formato completo ISO 8601 (YYYY-MM-DDTHH:MM:SSZ)",
			}).transform((str) => new Date(str)).optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
			ads: z.boolean().optional(),
			// Adicionando o slug ao esquema
			slug: z.string().optional(),
		}),
});

export const collections = { blog };
