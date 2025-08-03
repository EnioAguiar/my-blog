export const languages = {
  pt: 'Português',
  en: 'English',
};

export const defaultLang = 'pt';

/*
 * COMO ADICIONAR NOVAS TAGS (CATEGORIAS)
 *
 * 1. ESCOLHA UMA CHAVE (APELIDO) PARA A TAG:
 *    - Deve ser curta, em inglês e sem espaços (ex: `performance`, `backend`, `tutorial`).
 *    - Esta chave será usada nos arquivos .md dos posts.
 *
 * 2. ADICIONE AS TRADUÇÕES ABAIXO:
 *    - Para cada idioma (`pt` e `en`), adicione duas entradas:
 *      - `tags.sua-chave.name`: O nome que será exibido no site.
 *      - `tags.sua-chave.slug`: O texto que aparecerá na URL.
 *
 * 3. USE A CHAVE NO POST:
 *    - No frontmatter do seu arquivo .md, adicione a chave à lista de tags:
 *      `tags: ["sua-chave", "outra-chave"]`
 *
 * O site cuidará do resto automaticamente.
 */
export const ui = {
  pt: {
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.categories': 'Categorias',
    'nav.terms': 'Termos',
    'nav.privacy': 'Privacidade',
    'nav.about.slug': 'about',
    'nav.contact.slug': 'contato',
    'nav.categories.slug': 'categorias',
    'nav.terms.slug': 'termos',
    'nav.privacy.slug': 'privacidade',
    'footer.kofi': 'Apoie com um café',
    'posts.related': 'Posts Relacionados',
    'pagination.previous': '« Voltar',
    'pagination.next': 'Próximo »',
    'tags.astro.name': 'Astro',
    'tags.astro.slug': 'astro',
    'tags.blog.name': 'Blog',
    'tags.blog.slug': 'blog',
    'tags.web-dev.name': 'Desenvolvimento Web',
    'tags.web-dev.slug': 'desenvolvimento-web',
    'tags.ads.name': 'Publicidade',
    'tags.ads.slug': 'publicidade',
  },
  en: {
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
    'posts.related': 'Related Posts',
    'pagination.previous': '« Previous',
    'pagination.next': 'Next »',
    'tags.astro.name': 'Astro',
    'tags.astro.slug': 'astro',
    'tags.blog.name': 'Blog',
    'tags.blog.slug': 'blog',
    'tags.web-dev.name': 'Web Development',
    'tags.web-dev.slug': 'web-development',
    'tags.ads.name': 'Advertising',
    'tags.ads.slug': 'advertising',
  },
} as const;
