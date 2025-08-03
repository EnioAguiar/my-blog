# Meu Blog Pessoal

Este é o repositório do meu blog pessoal, construído com [Astro](https://astro.build/).

## Status do Projeto

O projeto foi migrado de sua estrutura original para o Astro. As principais alterações incluem:

-   **Migração para Astro:** O site agora usa o framework Astro.
-   **Novo Tema:** Foi aplicado um tema escuro, e a cor de destaque principal (verde) foi atualizada para um tom mais vibrante (`#59ef0b`).
-   **Funcionalidades da Home:**
    -   A página inicial agora exibe uma breve descrição para cada post.
    -   Os posts agora podem ter tags, que são exibidas com um estilo minimalista (ex: `#astro`).
-   **Busca Integrada:** A funcionalidade de busca foi integrada diretamente no cabeçalho, permitindo pesquisar em todo o site sem sair da página atual.
-   **Limpeza:** Os posts de exemplo originais foram substituídos e os links de redes sociais foram limpos.
-   **Idioma:** O conteúdo principal está em português.

## Funcionalidades Adicionais

### Sistema de Publicidade em Posts

Foi implementado um sistema para destacar posts como publicidade. A solução foi reestruturada para usar uma arquitetura de componentes, garantindo que o código seja robusto e de fácil manutenção.

**Como usar:**

1.  Para marcar um post como publicidade, adicione a seguinte propriedade ao frontmatter do arquivo `.md` do post:
    ```yaml
    ads: true
    ```

**Detalhes da Implementação:**

-   **Componente `PostCard.astro`:** Foi criado o componente em `src/components/PostCard.astro`. Ele é responsável por renderizar cada card de post na grade. Toda a lógica de exibição, incluindo a numeração e a etiqueta "ads", está isolada neste componente.
-   **Etiquetas Duplas:** Um post marcado como `ads` exibirá tanto seu número de ordem (canto esquerdo) quanto a etiqueta "ads" (canto direito).
-   **Schema de Conteúdo:** A propriedade `ads` foi adicionada ao schema de coleções em `src/content.config.ts`. Isso garante que o Astro reconheça o campo e o disponibilize para os componentes.

### Páginas Estruturais e Layout

Para profissionalizar o site, foram criadas páginas essenciais e um layout dedicado para elas, separando-as dos posts de blog.

-   **`PageLayout.astro`:** Um novo layout em `src/layouts/PageLayout.astro` foi criado para fornecer uma estrutura consistente para páginas estáticas.
-   **Página Sobre (`/pt/about`):** A página "Sobre" foi atualizada com conteúdo autêntico e uma nova imagem, e agora usa o `PageLayout`.
-   **Página de Contato (`/pt/contato`):** Foi criada uma página de contato com um formulário completo, integrado com o serviço [Formspree](https://formspree.io/) para o envio de e-mails.
-   **Rodapé Atualizado:** O rodapé do site foi limpo e agora contém links para as páginas "Sobre" e "Contato".

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
