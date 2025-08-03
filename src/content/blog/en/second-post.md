---
title: "Explorando o Astro"
description: "Um olhar sobre os recursos e a facilidade de uso do Astro."
pubDate: "2025-08-01"
heroImage: "../../../assets/blog-placeholder-1.jpg"
tags: ["astro", "ads"]
ads: true
---

Neste post, vamos dar uma olhada mais de perto em alguns dos recursos que o Astro oferece.


## Rotas baseadas em arquivos

O Astro usa um sistema de roteamento baseado em arquivos, o que significa que a estrutura de pastas em `src/pages` define as rotas do seu site. Isso torna a organização do projeto intuitiva e fácil de gerenciar.

-   `src/pages/index.astro` -> `meusite.com/`
-   `src/pages/sobre.astro` -> `meusite.com/sobre`
-   `src/pages/blog/[slug].astro` -> `meusite.com/blog/meu-post`

## Coleções de conteúdo

O Astro facilita o gerenciamento de conteúdo, como posts de blog ou produtos, com as **coleções de conteúdo**. Você pode definir um esquema para seus dados e o Astro irá validar e fornecer tipos TypeScript para o seu conteúdo Markdown ou MDX.

Isso garante que todos os seus posts tenham os campos necessários, como `title`, `description` e `pubDate`.

## Conclusão

Astro é uma ferramenta poderosa e flexível para a construção de sites rápidos e modernos. A combinação de renderização estática, arquitetura de ilhas e um ótimo ecossistema o torna uma excelente escolha para qualquer projeto web.