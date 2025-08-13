## Visão Geral do Projeto

Este é um blog pessoal construído com o framework [Astro](https://astro.build/). O projeto utiliza Markdown/MDX para o conteúdo dos posts e possui um sistema de tags, otimização de SEO com sitemap, busca no lado do cliente com Pagefind e um fluxo de trabalho para otimização de imagens.

**Tecnologias Principais:**

- **Framework:** Astro
- **Linguagem:** TypeScript
- **Conteúdo:** Markdown (MDX)
- **Busca:** Pagefind
- **Otimização de Imagens:** Sharp
- **Formatação:** Prettier
- **Linting:** ESLint
- **Autocomplete:** Tailwind CSS IntelliSense

---

## Comandos Essenciais

Abaixo estão os comandos NPM mais importantes para o desenvolvimento e manutenção do blog.

| Comando                | Ação                                                              |
| :--------------------- | :---------------------------------------------------------------- |
| `npm install`          | Instala as dependências do projeto.                               |
| `npm run dev`          | Inicia o servidor de desenvolvimento local em `localhost:4321`.   |
| `npm run build`        | Compila o site para produção na pasta `./dist/`.                  |
| `npm run preview`      | Visualiza a compilação de produção localmente antes de implantar. |
| `npm run optimize`     | Otimiza novas imagens na pasta `src/assets` para a web.           |
| `npm run format`       | Formata todo o código automaticamente.                            |
| `npm run format:check` | Verifica se o código está formatado.                              |
| `npm run lint`         | Analisa a qualidade do código.                                    |
| `npm run lint:fix`     | Corrige problemas de código automaticamente.                      |

---

## Ferramentas de Desenvolvimento

### Configuração de Ambiente

O projeto está configurado com ferramentas profissionais para garantir qualidade e consistência do código:

- **Prettier:** Formatação automática de código com configurações específicas para Astro e Tailwind CSS
- **ESLint:** Análise de qualidade de código com regras para Astro e TypeScript
- **Astro Language Tools:** Suporte completo para arquivos `.astro` com autocomplete e validação
- **Tailwind CSS IntelliSense:** Autocomplete inteligente para classes do Tailwind CSS

### Arquivos de Configuração

- **`.prettierrc`:** Configurações de formatação do Prettier
- **`eslint.config.js`:** Configurações do ESLint no formato flat config
- **`.vscode/settings.json`:** Configurações específicas do VSCode/Cursor
- **`package.json`:** Scripts automatizados para formatação e linting

---

## Convenções de Desenvolvimento

### Estrutura de Conteúdo

- **Posts:** Ficam em `src/content/blog/`.
- **Frontmatter:** Cada post deve conter metadados definidos no schema em `src/content.config.ts`, incluindo `title`, `description`, `pubDate`, `heroImage` e `tags`.
- **Datas (`pubDate`):** Para garantir a ordenação correta e evitar bugs de paginação, a `pubDate` **deve obrigatoriamente** incluir o horário no formato ISO 8601, terminando com `Z` (ex: `YYYY-MM-DDTHH:MM:SSZ`). O sistema de build agora impõe essa regra e falhará se o formato estiver incorreto.
- **Imagens:** As imagens dos posts devem ser colocadas em `src/assets/` e otimizadas com o comando `npm run optimize` antes do commit.

### Sistema de Tags

- **Arquivo Central:** O arquivo `src/i18n/ui.ts` é a fonte da verdade para todos os textos da interface (UI) e, mais importante, para as **tags de categoria**.
- **Adicionando Novas Tags:** Para adicionar uma nova tag, é necessário:
  1.  Escolher uma **chave** curta em inglês (ex: `new-tech`).
  2.  Adicionar as entradas para o nome (`tags.new-tech.name`) e para a URL (`tags.new-tech.slug`) em `src/i18n/ui.ts`.
  3.  Usar a **chave** no frontmatter do post (ex: `tags: ["new-tech"]`).

### Workflow de Desenvolvimento

- **Formatação Automática:** O código é formatado automaticamente ao salvar arquivos
- **Linting em Tempo Real:** ESLint verifica a qualidade do código durante o desenvolvimento
- **Pre-commit:** Sempre execute `npm run format` e `npm run lint` antes de fazer commit
- **Otimização de Imagens:** Use `npm run optimize` para novas imagens antes do commit

### Segurança

- Um middleware em `src/middleware.ts` adiciona cabeçalhos de segurança (`X-Frame-Options`, `X-Content-Type-Options`, etc.) a todas as respostas do servidor para aumentar a proteção do site.

---

### Ferramentas de Desenvolvimento Local

Esta seção descreve scripts e ferramentas que são para uso exclusivo em desenvolvimento local e não fazem parte do build do site. A pasta `scripts/` está no `.gitignore`.

#### Extrator de Conteúdo Web (`scrape.mjs`)

- **Objetivo:** Acelerar a criação de conteúdo extraindo o texto principal de um artigo a partir de uma URL.
- **Tecnologia:** É um script Node.js que usa as bibliotecas `axios` para baixar a página e `cheerio` para analisar o HTML.
- **Como usar:**
  ```bash
  node scripts/scrape.mjs "URL_DO_ARTIGO_AQUI"
  ```
- **Importante:** O script é uma ferramenta de conveniência. Sites com proteção avançada (como a Bloomberg) podem bloqueá-lo.
