# Meu Blog Pessoal

Este é o repositório do meu blog pessoal, construído com [Astro](https://astro.build/).

## Status do Projeto

O projeto foi migrado de sua estrutura original para o Astro. As principais alterações incluem:

-   **Migração para Astro:** O site agora usa o framework Astro.
-   **Novo Tema:** Foi aplicado um tema escuro, e a cor de destaque principal (verde) foi atualizada para um tom mais vibrante (`#59ef0b`).
-   **Funcionalidades da Home:**
    -   A página inicial agora exibe uma breve descrição para cada post.
    -   Os posts agora podem ter tags, que são exibidas com um estilo minimalista (ex: `#astro`).
-   **Limpeza:** Os posts de exemplo originais foram substituídos e os links de redes sociais foram limpos.
-   **Idioma:** O conteúdo principal está em português.

## 🚀 Estrutura do Projeto

A estrutura de pastas e arquivos do projeto é a seguinte:

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

-   **`src/pages/`**: Contém as páginas do site. Cada arquivo `.astro` ou `.md` nesta pasta se torna uma rota no site.
-   **`src/content/blog/`**: Contém as postagens do blog em formato Markdown ou MDX.
-   **`src/components/`**: Contém os componentes reutilizáveis (Astro, React, etc.).
-   **`public/`**: Contém os arquivos estáticos, como imagens e fontes.

## 🧞 Comandos

Todos os comandos devem ser executados a partir da raiz do projeto em um terminal:

| Comando | Ação |
| :--- | :--- |
| `npm install` | Instala as dependências do projeto. |
| `npm run dev` | Inicia o servidor de desenvolvimento local em `localhost:4321`. |
| `npm run build` | Compila o site para produção na pasta `./dist/`. |
| `npm run preview` | Visualiza a compilação de produção localmente antes de implantar. |

## ✨ Recursos Úteis

-   **Documentação do Astro:** [docs.astro.build](https://docs.astro.build)
-   **Servidor do Discord:** [astro.build/chat](https://astro.build/chat)

## Créditos

Este tema é baseado no [Bear Blog](https://github.com/HermanMartinus/bearblog/).
