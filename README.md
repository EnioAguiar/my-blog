# My Personal Blog

This is the repository for my personal blog, built with [Astro](https://astro.build/).

## Project Status

The project was migrated from its original structure to Astro. The main changes include:

-   **Astro Migration:** The site now uses the Astro framework.
-   **New Theme:** A dark theme has been applied, and the main highlight color (green) has been updated to a more vibrant tone (`#59ef0b`).
-   **Home Page Features:**
    -   The home page now displays a brief description for each post.
    -   Posts can now have tags, which are displayed with a minimalist style (e.g., `#astro`).

### Search with JSON Index and Fuse.js

To provide a fast and fully client-side search experience, the blog uses a modern and efficient approach:

1.  **Index Generation:** During the build process, an Astro API endpoint (`/api/search-index.json.ts`) generates a `search-index.json` file. This file contains the essential data for all posts (title, description, body, and URL) for the search.
2.  **Client-Side Search:** A dedicated search page (`/search`) uses the [Fuse.js](https://fusejs.io/) library to perform a "fuzzy" search directly in the user's browser. This means the search is almost instantaneous, without the need for external server calls.

## Recent Improvements

### Layout and Style
- **Fixed Footer:** The site layout has been adjusted with Flexbox to ensure the footer remains fixed at the bottom of the screen, even on pages with little content.
- **Header Style:** The header has been redesigned:
    - The site title ("brainnoises") now has a more subtle style (white by default, green on hover).
    - The "Categories" link has been transformed into a stylized button for better visual emphasis.
- **Divider Lines:** The thickness of the divider lines throughout the site (header, footer, and page body) has been increased to `3px` for greater consistency and visual impact.

### Tag System
- **Centralized Management:** Tags are now managed from a single location, the `src/i18n/ui.ts` file. It maps a neutral tag "key" (e.g., `web-dev`) to its display name and URL slug.
- **How to Add New Tags:** Instructions for adding new tags are documented directly in the `src/i18n/ui.ts` file for easy future maintenance.

### SEO Optimization

To improve the blog's visibility in search engines, a complete SEO optimization was carried out, covering technical and content aspects.

-   **Technical SEO:**
    -   **Sitemap:** The project is configured with the `@astrojs/sitemap` integration to automatically generate a `sitemap-index.xml`, helping search engines discover and index all pages efficiently.
    -   **`robots.txt`:** A `public/robots.txt` file has been created to instruct search engine robots, allowing the entire site to be crawled and pointing to the sitemap.
    -   **Meta Tags:** The `BaseHead.astro` component has been verified and confirmed to already implement best practices, including `canonical` tags, Open Graph (for social media), and Twitter Cards.

-   **On-Page SEO:**
    -   **Titles and Descriptions:** The `SITE_DESCRIPTION` in `src/consts.ts` has been updated to be more descriptive and optimized. The titles of the "About" page have been adjusted to include the blog's name ("Brainnoises"), reinforcing the brand identity. Additionally, the titles and descriptions of all existing posts have been rewritten to be shorter, more direct, and rich in relevant keywords.
    -   **Subheadings:** The subheading structure (`##`, `###`) within the posts has been revised to ensure a clear hierarchy and the use of specific terms, improving readability for users and robots.

## Content Philosophy and Strategy

The content of this blog is guided by a central philosophy of critical analysis of technology, freedom, and finance. The goal is to go beyond the news and offer an original and in-depth perspective. The content strategy is based on the following thematic pillars:

### Thematic Pillars

1.  **Privacy and Digital Sovereignty:**
    -   **Focus:** This is the main pillar and the blog's biggest differentiator. The goal is to empower the reader to regain control of their digital life.
    -   **Key Topics:** `digital security for beginners`, `online privacy`, `self-hosted applications`, `digital sovereignty guide`.
    -   **Strategy:** Create comprehensive guides and post series that become a reference on the subject, with a philosophical and practical approach.

2.  **Linux and Open Source:**
    -   **Focus:** Present the world of free software as a viable and powerful alternative to the Big Tech ecosystem.
    -   **Key Topics:** `linux tutorials`, `best linux distributions`, `desktop customization`, `task automation`.
    -   **Strategy:** Address popular topics with a unique angle, always connecting the tool to the philosophy of freedom and privacy.

3.  **Crypto and Web3:**
    -   **Focus:** Critical analysis of the crypto-asset and decentralized technology landscape, avoiding a purely speculative narrative.
    -   **Key Topics:** `cryptocurrency arbitrage`, `how web3 works`, `DeFi explained`, `tokenization`.
    -   **Strategy:** Maintain a political and social lens, discussing the implications of power, the risks, and the unfulfilled promises of the sector.

4.  **AI and Productivity (with a Focus on Open Source):**
    -   **Focus:** Explore the universe of Artificial Intelligence through the perspective of open source, highlighting tools that respect user sovereignty.
    -   **Key Topics:** `open source artificial intelligence`, `AI productivity tools`, `self-hosted AI models`.
    -   **Strategy:** Position the blog as a reference in AI that can be controlled by the user, as opposed to closed platforms.

5.  **Development and Cloud:**
    -   **Focus:** Offer practical guides for developers and small businesses looking to build on the web independently and at a low cost.
    -   **Key Topics:** `open source web development`, `cloud computing for small businesses`, `zero cost cloud solutions`.
    -   **Strategy:** Create high-value practical tutorials and guides that solve real problems for a technical audience.

## Additional Features

### Advertising System in Posts

An system has been implemented to highlight posts as advertisements. The solution has been restructured to use a component-based architecture, ensuring the code is robust and easy to maintain.

**How to use:**

1.  To mark a post as an advertisement, add the following property to the frontmatter of the post's `.md` file:
    ```yaml
    ads: true
    ```

**Implementation Details:**

-   **`PostCard.astro` Component:** The component was created in `src/components/PostCard.astro`. It is responsible for rendering each post card in the grid. All display logic, including numbering and the "ads" label, is isolated in this component.
-   **Dual Labels:** A post marked as `ads` will display both its order number (left corner) and the "ads" label (right corner).
-   **Content Schema:** The `ads` property has been added to the collections schema in `src/content.config.ts`. This ensures that Astro recognizes the field and makes it available to the components.

### Structural Pages and Layout

To professionalize the site, essential pages and a dedicated layout for them have been created, separating them from blog posts.

-   **`PageLayout.astro`:** A new layout in `src/layouts/PageLayout.astro` has been created to provide a consistent structure for static pages.
-   **About Page (`/about`):** The "About" page has been updated with authentic content and a new image, and now uses the `PageLayout`.
-   **Contact Page (`/contact`):** A contact page with a complete form has been created, integrated with the [Formspree](https://formspree.io/) service for sending emails.
-   **Updated Footer:** The site's footer has been cleaned up and now contains links to the "About" and "Contact" pages.

## 🚀 Project Structure

The project's folder and file structure is as follows:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

-   **`src/pages/`**: Contains the site's pages. Each `.astro` or `.md` file in this folder becomes a route on the site.
-   **`src/content/blog/`**: Contains the blog posts in Markdown or MDX format.
-   **`src/components/`**: Contains reusable components (Astro, React, etc.).
-   **`public/`**: Contains static files, such as images and fonts.

## 🧞 Commands

All commands must be run from the project root in a terminal:

| Command            | Action                                                                                                                   |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `npm install`      | Installs the project's dependencies.                                                                                    |
| `npm run dev`      | Starts the local development server at `localhost:4321`.                                                        |
| `npm run build`    | Compiles the site for production. **Useful for testing the final version locally**, but not necessary for publishing.      |
| `npm run preview`  | Previews the production build locally before deploying.                                                      |
| `npm run optimize` | Optimizes images in the `src/assets` folder for the web.                                                                   |

## 🚀 Deployment

This project uses **GitHub Actions** to automate the deployment process. Any `push` to the `main` branch will trigger a workflow that automatically compiles and deploys the site to GitHub Pages.

This means that **it is not necessary to run `npm run build` locally** before submitting your changes. The process is 100% automated.

## ✨ Useful Resources

-   **Astro Documentation:** [docs.astro.build](https://docs.astro.build)
-   **Discord Server:** [astro.build/chat](https://astro.build/chat)
## Credits

This theme is based on the [Bear Blog](https://github.com/HermanMartinus/bearblog/).

---

## How to Manage the Blog

This section documents the processes for creating and managing the blog's content.

### Creating a New Post

1.  **Location:** Create a new `.md` file inside the `src/content/blog/` directory.

2.  **File Name:** The file name will become part of the URL (e.g., `my-new-post.md`).

3.  **Post Structure (Frontmatter):** The file's header must contain the following fields:
    ```yaml
    ---
    title: "Post Title"
    description: "A brief description that will appear in the listing and in search results."
    pubDate: "YYYY-MM-DDTHH:MM:SSZ" # Publication date. Use the ISO 8601 format with time to ensure correct ordering.
    heroImage: "@/assets/image-name.jpg" # Path to the image using the alias.
    tags: ["tag-key-1", "tag-key-2"] # List of tag keys (see below).
    ads: true # (Optional) Add this line to mark the post as an advertisement.
    ---

    Your post content starts here...
    ```

### Optimizing Images

To ensure the site remains fast, all cover images (`heroImage`) must be optimized. A command has been created to automate this process.

**When to use:** After adding a new image file (e.g., `.jpg` or `.png`) to the `src/assets` folder.

**How to use:**
1.  Add your original image to `src/assets`.
2.  Run the following command in the terminal:
    ```bash
    npm run optimize
    ```
3.  The script will automatically resize images (if larger than 1200px wide) and **convert them to the WebP format**, saving the `.webp` version alongside the original file. Astro, through `astro:assets`, will automatically serve the most optimized version to the user's browser.

### Managing Tags (Categories)

The tag system is centralized in the `src/i18n/ui.ts` file.

1.  **How It Works:** Tags in posts are defined by **keys** (short English aliases, e.g., `web-dev`, `crypto`). The site then uses the `src/i18n/ui.ts` file to translate these keys into the correct name and URL slug.

2.  **To Add a New Tag:**
    1.  **Choose a Key:** Think of a short, descriptive key in English (e.g., `performance`).
    2.  **Edit `src/i18n/ui.ts`:** Add the entries for the new key. Follow the existing pattern:
        ```javascript
        'tags.performance.name': 'Performance',
        'tags.performance.slug': 'performance',
        ```
    3.  **Use the Key in the Post:** Now you can use the `performance` key in your post's `tags` list.

### Path Aliases

To simplify imports and file references in the project, path aliases have been configured. Instead of using complex relative paths like `../../../components/Header.astro`, you can use a cleaner alias.

**How to use:**

-   Use aliases in the frontmatter of posts (for `heroImage`) or in any import within `.astro` or `.ts` files.
-   `heroImage` example: `heroImage: "@/assets/my-image.jpg"`
-   Import example: `import Header from '@/components/Header.astro';`

**Available Aliases:**

| Alias | Real Path |
| :--- | :--- |
| `@/assets` | `src/assets` |
| `@/components` | `src/components` |
| `@/layouts` | `src/layouts` |
| `@/pages` | `src/pages` |
| `@/styles` | `src/styles` |
| `@/i18n` | `src/i18n` |
| `@/consts` | `src/consts.ts` |
