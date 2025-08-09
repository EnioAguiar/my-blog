## Visão Geral do Projeto

Este é um blog pessoal construído com o framework [Astro](https://astro.build/). O projeto utiliza Markdown/MDX para o conteúdo dos posts e possui um sistema de tags, otimização de SEO com sitemap, busca no lado do cliente com Pagefind e um fluxo de trabalho para otimização de imagens.

**Tecnologias Principais:**
-   **Framework:** Astro
-   **Linguagem:** TypeScript
-   **Conteúdo:** Markdown (MDX)
-   **Busca:** Pagefind
-   **Otimização de Imagens:** Sharp

---

## Comandos Essenciais

Abaixo estão os comandos NPM mais importantes para o desenvolvimento e manutenção do blog.

| Comando              | Ação                                                                |
| :------------------- | :------------------------------------------------------------------ |
| `npm install`        | Instala as dependências do projeto.                                 |
| `npm run dev`        | Inicia o servidor de desenvolvimento local em `localhost:4321`.     |
| `npm run build`      | Compila o site para produção na pasta `./dist/`.                    |
| `npm run preview`    | Visualiza a compilação de produção localmente antes de implantar.   |
| `npm run optimize`   | Otimiza novas imagens na pasta `src/assets` para a web.             |

---

## Convenções de Desenvolvimento

### Estrutura de Conteúdo
-   **Posts:** Ficam em `src/content/blog/`.
-   **Frontmatter:** Cada post deve conter metadados definidos no schema em `src/content.config.ts`, incluindo `title`, `description`, `pubDate`, `heroImage` e `tags`.
-   **Datas (`pubDate`):** Para garantir a ordem correta de posts publicados no mesmo dia, a `pubDate` deve incluir o horário no formato ISO 8601 (ex: `YYYY-MM-DDTHH:MM:SSZ`). Isso evita inconsistências na ordenação.
-   **Imagens:** As imagens dos posts devem ser colocadas em `src/assets/` e otimizadas com o comando `npm run optimize` antes do commit.

### Sistema de Tags
-   **Arquivo Central:** O arquivo `src/i18n/ui.ts` é a fonte da verdade para todos os textos da interface (UI) e, mais importante, para as **tags de categoria**.
-   **Adicionando Novas Tags:** Para adicionar uma nova tag, é necessário:
    1.  Escolher uma **chave** curta em inglês (ex: `new-tech`).
    2.  Adicionar as entradas para o nome (`tags.new-tech.name`) e para a URL (`tags.new-tech.slug`) em `src/i18n/ui.ts`.
    3.  Usar a **chave** no frontmatter do post (ex: `tags: ["new-tech"]`).

### Segurança
-   Um middleware em `src/middleware.ts` adiciona cabeçalhos de segurança (`X-Frame-Options`, `X-Content-Type-Options`, etc.) a todas as respostas do servidor para aumentar a proteção do site.

---

### Ferramentas de Desenvolvimento Local

Esta seção descreve scripts e ferramentas que são para uso exclusivo em desenvolvimento local e não fazem parte do build do site. A pasta `scripts/` está no `.gitignore`.

#### Extrator de Conteúdo Web (`scrape.mjs`)
-   **Objetivo:** Acelerar a criação de conteúdo extraindo o texto principal de um artigo a partir de uma URL.
-   **Tecnologia:** É um script Node.js que usa as bibliotecas `axios` para baixar a página e `cheerio` para analisar o HTML.
-   **Como usar:**
    ```bash
    node scripts/scrape.mjs "URL_DO_ARTIGO_AQUI"
    ```
-   **Importante:** O script é uma ferramenta de conveniência. Sites com proteção avançada (como a Bloomberg) podem bloqueá-lo.