/*
 * HOW TO ADD NEW TAGS (CATEGORIES)
 *
 * 1. CHOOSE A KEY FOR THE TAG:
 *    - It should be short, in English, and without spaces (e.g., `performance`, `backend`, `tutorial`).
 *    - This key will be used in the .md files of the posts.
 *
 * 2. ADD THE TAG BELOW:
 *    - Add two entries for the key:
 *      - `tags.your-key.name`: The name that will be displayed on the site.
 *      - `tags.your-key.slug`: The text that will appear in the URL.
 *
 * 3. USE THE KEY IN THE POST:
 *    - In the frontmatter of your .md file, add the key to the tags list:
 *      `tags: ["your-key", "another-key"]`
 */
export const ui = {
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.categories': 'Categories',
    'nav.terms': 'Terms',
    'nav.privacy': 'Privacy',
    'nav.about.slug': 'about',
    'nav.contact.slug': 'contact',
    'nav.categories.slug': 'categories',
    'nav.terms.slug': 'terms',
    'nav.privacy.slug': 'privacy',
    'footer.kofi': 'Buy me a coffee',
    'footer.newsletter.title': 'Subscribe to Brainnoises',
    'footer.newsletter.description': 'Get the latest posts delivered straight to your inbox.',
    'footer.newsletter.email': 'Your best email',
    'footer.newsletter.subscribe': 'Subscribe',
    'posts.related': 'Related Posts',
    'pagination.previous': '« Previous',
    'pagination.next': 'Next »',
    'category.title': 'Posts with category',

    'search.placeholder': 'Search posts...',
    'search.label': 'Search',
    'search.results': 'Search Results',
    'search.resultsFor': 'Results for',
    'search.noResults': 'No results found.',

    'share.title': 'Share this post',
    'share.twitter': 'Share on Twitter',
    'share.facebook': 'Share on Facebook',
    'share.linkedin': 'Share on LinkedIn',
    'share.whatsapp': 'Share on WhatsApp',
    'share.telegram': 'Share on Telegram',
    'share.reddit': 'Share on Reddit',
    'share.copy': 'Copy link',
    'share.copied': 'Link copied!',
    'tags.web-dev.name': 'Web Development',
    'tags.web-dev.slug': 'web-development',
    'tags.ads.name': 'Advertising',
    'tags.ads.slug': 'advertising',
    'tags.crypto.name': 'Cryptocurrency',
    'tags.crypto.slug': 'cryptocurrency',
    'tags.regulation.name': 'Regulation',
    'tags.regulation.slug': 'regulation',
    'tags.blockchain.name': 'Blockchain',
    'tags.blockchain.slug': 'blockchain',
    'tags.politics.name': 'Politics',
    'tags.politics.slug': 'politics',
    'tags.linux.name': 'Linux',
    'tags.linux.slug': 'linux',
    'tags.open-source.name': 'Open Source',
    'tags.open-source.slug': 'open-source',
    'tags.security.name': 'Security',
    'tags.security.slug': 'security',
    'tags.ai.name': 'AI',
    'tags.ai.slug': 'ai',
    'tags.film-review.name': 'Film Review',
    'tags.film-review.slug': 'film-review',
    'tags.games.name': 'Games',
    'tags.games.slug': 'games',
    'tags.fps.name': 'FPS',
    'tags.fps.slug': 'fps',
    'tags.tech.name': 'Technology',
    'tags.tech.slug': 'technology',
    'tags.mobile.name': 'Mobile',
    'tags.mobile.slug': 'mobile',
    'tags.development.name': 'Development',
    'tags.development.slug': 'development',
    'tags.freedom.name': 'Freedom',
    'tags.freedom.slug': 'freedom',
    'tags.debanking.name': 'Debanking',
    'tags.debanking.slug': 'debanking',
    'tags.investing.name': 'Investing',
    'tags.investing.slug': 'investing',
    'tags.mindset.name': 'Mindset',
    'tags.mindset.slug': 'mindset',
    'tags.web3.name': 'Web3',
    'tags.web3.slug': 'web3',
    'tags.vr.name': 'Virtual Reality',
    'tags.vr.slug': 'virtual-reality',
    'tags.culture.name': 'Culture',
    'tags.culture.slug': 'culture',
    'tags.cybersecurity.name': 'Cybersecurity',
    'tags.cybersecurity.slug': 'cybersecurity',
    'tags.data-breach.name': 'Data Breach',
    'tags.data-breach.slug': 'data-breach',
    'tags.privacy.name': 'Privacy',
    'tags.privacy.slug': 'privacy',
    'tags.environment.name': 'Environment',
    'tags.environment.slug': 'environment',
    '404.title': 'Page Not Found',
    '404.message': 'The page you are looking for does not exist or has been moved.',
    '404.back': 'Go back to the homepage',
} as const;

/**
 * A simple translation function that returns a string for a given key.
 * @param key The key of the UI string to retrieve.
 * @returns The translated string.
 */
export function t(key: keyof typeof ui): string {
    return ui[key];
}

/**
 * Retrieves the display name and slug for a given tag key.
 * @param key The key of the tag (e.g., 'web-dev').
 * @returns An object with the name and slug, or a default if not found.
 */
export function getTag(key: string): { name: string; slug: string } {
    const nameKey = `tags.${key}.name` as keyof typeof ui;
    const slugKey = `tags.${key}.slug` as keyof typeof ui;

    if (nameKey in ui && slugKey in ui) {
        return {
            name: ui[nameKey],
            slug: ui[slugKey],
        };
    }
    
    // If a tag is not found in the dictionary, create a sensible default.
    // This makes development easier as you don't have to define every single tag.
    const name = key
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
    
    return {
        name: name,
        slug: key,
    };
}
