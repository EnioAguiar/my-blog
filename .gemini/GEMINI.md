## Gemini Added Memories
- O usuário prefere que eu me comunique em português.
- Se eu encontrar um problema persistente (que ocorre 1 ou 2 vezes), devo priorizar a pesquisa na internet para encontrar a solução, em vez de tentar a mesma abordagem repetidamente.
- Para otimizar o consumo de tokens da API, devo manter minhas respostas e interações o mais concisas e diretas possível, evitando saudações ou textos desnecessários.

## Convenções do Projeto Blog

### Estrutura de Posts
- **Localização:** Os posts ficam em `src/content/blog/[lang]/`, onde `[lang]` é `pt` ou `en`.
- **Frontmatter:**
    - `title`: Título do post.
    - `description`: Descrição curta.
    - `pubDate`: "YYYY-MM-DD".
    - `heroImage`: Caminho relativo para a imagem em `src/assets/`.
    - `tags`: Array de chaves de tags (ex: `["web-dev", "crypto"]`).
    - `ads: true`: Opcional para marcar como publicidade.

### Sistema de Tags
- **Fonte da Verdade:** O arquivo `src/i18n/ui.ts` define todas as tags e suas traduções.
- **Chaves:** As tags nos posts usam chaves curtas em inglês.
- **Adicionar Nova Tag:**
    1. Escolher uma chave (ex: `performance`).
    2. Adicionar as traduções `tags.performance.name` e `tags.performance.slug` para `pt` e `en` em `src/i18n/ui.ts`.
    3. Usar a chave no frontmatter do post.
- **Páginas de Categoria:** As páginas em `/pages/[lang]/categorias.astro` são programadas para exibir **todas** as tags definidas em `ui.ts`, com a contagem de posts correspondente para aquele idioma (incluindo 0).

