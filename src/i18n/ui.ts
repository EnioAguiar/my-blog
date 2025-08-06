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
    'footer.newsletter.title': 'Inscreva-se na Brainnoises',
    'footer.newsletter.description': 'Receba os últimos posts diretamente no seu email.',
    'footer.newsletter.email': 'Seu melhor email',
    'footer.newsletter.subscribe': 'Inscrever',
    'posts.related': 'Posts Relacionados',
    'pagination.previous': '« Voltar',
    'pagination.next': 'Próximo »',
    'share.title': 'Compartilhe este post',
    'share.twitter': 'Compartilhar no Twitter',
    'share.facebook': 'Compartilhar no Facebook',
    'share.linkedin': 'Compartilhar no LinkedIn',
    'share.whatsapp': 'Compartilhar no WhatsApp',
    'share.telegram': 'Compartilhar no Telegram',
    'share.copy': 'Copiar link',
    'share.copied': 'Link copiado!',
    'tags.web-dev.name': 'Desenvolvimento Web',
    'tags.web-dev.slug': 'desenvolvimento-web',
    'tags.ads.name': 'Publicidade',
    'tags.ads.slug': 'publicidade',
    'tags.crypto.name': 'Criptomoedas',
    'tags.crypto.slug': 'criptomoedas',
    'tags.brazil.name': 'Brasil',
    'tags.brazil.slug': 'brasil',
    'tags.regulation.name': 'Regulação',
    'tags.regulation.slug': 'regulacao',
    'tags.blockchain.name': 'Blockchain',
    'tags.blockchain.slug': 'blockchain',
    'tags.politics.name': 'Política',
    'tags.politics.slug': 'politica',
    'tags.linux.name': 'Linux',
    'tags.linux.slug': 'linux',
    'tags.open-source.name': 'Código Aberto',
    'tags.open-source.slug': 'codigo-aberto',
    'tags.security.name': 'Segurança',
    'tags.security.slug': 'seguranca',
    'tags.ai.name': 'Inteligência Artificial',
    'tags.ai.slug': 'inteligencia-artificial',
    'tags.film-review.name': 'Crítica de Filme',
    'tags.film-review.slug': 'critica-de-filme',
    'tags.games.name': 'Jogos',
    'tags.games.slug': 'jogos',
    'tags.fps.name': 'FPS',
    'tags.fps.slug': 'fps',
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
    'footer.newsletter.title': 'Subscribe to Brainnoises',
    'footer.newsletter.description': 'Get the latest posts delivered straight to your inbox.',
    'footer.newsletter.email': 'Your best email',
    'footer.newsletter.subscribe': 'Subscribe',
    'posts.related': 'Related Posts',
    'pagination.previous': '« Previous',
    'pagination.next': 'Next »',
    'share.title': 'Share this post',
    'share.twitter': 'Share on Twitter',
    'share.facebook': 'Share on Facebook',
    'share.linkedin': 'Share on LinkedIn',
    'share.whatsapp': 'Share on WhatsApp',
    'share.telegram': 'Share on Telegram',
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
  },
} as const;
