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

## Melhorias Recentes

### Layout e Estilo
- **Rodapé Fixo:** O layout do site foi ajustado com Flexbox para garantir que o rodapé permaneça fixo na parte inferior da tela, mesmo em páginas com pouco conteúdo.
- **Estilo do Cabeçalho:** O cabeçalho foi redesenhado:
    - O título do site ("brainnoises") agora tem um estilo mais sutil (branco por padrão, verde ao passar o mouse).
    - O link "Categorias" foi transformado em um botão estilizado para melhor destaque visual.
- **Linhas Divisórias:** A espessura das linhas divisórias em todo o site (cabeçalho, rodapé e corpo da página) foi aumentada para `3px` para maior consistência e impacto visual.

### Sistema de Tags Internacionalizado
Foi implementado um sistema robusto para que as tags (categorias) sejam traduzidas e funcionem de forma independente em cada idioma.
- **Tradução Centralizada:** As tags agora são gerenciadas a partir de um único local, o arquivo `src/i18n/ui.ts`. Ele mapeia uma "chave" de tag neutra (ex: `web-dev`) para seu nome de exibição e slug de URL em cada idioma.
- **URLs Amigáveis:** As páginas de categoria agora usam slugs traduzidos (ex: `/pt/categorias/desenvolvimento-web` e `/en/categories/web-development`).
- **Como Adicionar Novas Tags:** As instruções para adicionar novas tags foram documentadas diretamente no arquivo `src/i18n/ui.ts` para facilitar a manutenção futura.

### Otimização de SEO

Para melhorar a visibilidade do blog nos motores de busca, foi realizada uma otimização completa de SEO, cobrindo aspectos técnicos e de conteúdo.

-   **SEO Técnico:**
    -   **Sitemap:** O projeto foi configurado com a integração `@astrojs/sitemap` para gerar automaticamente um `sitemap-index.xml`, ajudando os buscadores a descobrir e indexar todas as páginas de forma eficiente.
    -   **`robots.txt`:** Foi criado um arquivo `public/robots.txt` para instruir os robôs de busca, permitindo o rastreamento de todo o site e apontando para o sitemap.
    -   **Meta Tags:** O componente `BaseHead.astro` foi verificado e confirmado que já implementa as melhores práticas, incluindo tags `canonical`, Open Graph (para redes sociais) e Twitter Cards.

-   **SEO On-Page:**
    -   **Títulos e Descrições:** Os títulos e descrições de todos os posts existentes (em português e inglês) foram reescritos para serem mais curtos, diretos e ricos em palavras-chave relevantes.
    -   **Subtítulos:** A estrutura de subtítulos (`##`, `###`) dentro dos posts foi revisada para garantir uma hierarquia clara e o uso de termos específicos, melhorando a legibilidade para usuários e robôs.

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

### Internacionalização e Estrutura de Conteúdo

O blog foi estruturado para suportar múltiplos idiomas (português e inglês) de forma coesa. A seguir, a descrição da arquitetura que mantém o sistema funcionando.

**Nota sobre `id` vs. `slug`:** Após depuração, foi identificado que a propriedade correta para criar links únicos para os posts é `id`, e não `slug`. O objeto de post retornado por `getCollection` neste projeto contém o `id` (ex: `pt/primeiro-post`) como o identificador que também funciona como o slug da URL. Toda a lógica foi padronizada para usar `post.id` de forma consistente.

A funcionalidade de internacionalização é mantida pela seguinte estrutura:

1.  **Configuração de Idiomas (`src/i18n/ui.ts`)**: Este arquivo é o centro do sistema de tradução. Ele define os idiomas suportados (`en`, `pt`) e armazena os textos da interface do usuário (UI), como títulos de navegação e seus respectivos slugs.

2.  **Organização do Conteúdo (`src/content/blog/`)**: As postagens do blog são organizadas em subdiretórios nomeados com o código do idioma (ex: `en/` e `pt/`). Isso permite que o Astro associe cada post ao seu idioma correto.

3.  **Geração de Páginas de Post (`src/pages/blog/[...slug].astro`)**: Esta é a rota dinâmica que renderiza cada post individual. Sua função `getStaticPaths` itera sobre todos os posts e gera uma página para cada um, usando o `post.id` como o parâmetro da URL.

4.  **Geração das Páginas de Listagem (`src/pages/[lang]/[...page].astro`)**: Esta rota dinâmica cria as páginas de índice para cada idioma (ex: `/pt/`, `/en/`, `/pt/2`). Ela filtra os posts pelo idioma contido no `id` antes de criar as páginas paginadas.

5.  **Layouts (`src/layouts/`)**: O `BlogPost.astro` serve como o template para as páginas de post individuais, incluindo a lógica para encontrar e exibir posts relacionados do mesmo idioma. O `PageLayout.astro` é usado para páginas estáticas como "Sobre" e "Contato".

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
| `npm run optimize` | Otimiza as imagens na pasta `src/assets` para a web. |

## ✨ Recursos Úteis

-   **Documentação do Astro:** [docs.astro.build](https://docs.astro.build)
-   **Servidor do Discord:** [astro.build/chat](https://astro.build/chat)
## Créditos

Este tema é baseado no [Bear Blog](https://github.com/HermanMartinus/bearblog/).

---

## Como Gerenciar o Blog

Esta seção documenta os processos para criar e gerenciar o conteúdo do blog.

### Criando um Novo Post

1.  **Localização:** Crie um novo arquivo `.md` dentro do diretório correspondente ao idioma:
    -   **Português:** `src/content/blog/pt/`
    -   **Inglês:** `src/content/blog/en/`

2.  **Nome do Arquivo:** O nome do arquivo se tornará parte da URL (ex: `meu-novo-post.md`).

3.  **Estrutura do Post (Frontmatter):** O cabeçalho do arquivo deve conter os seguintes campos:
    ```yaml
    ---
    title: "Título do Post"
    description: "Uma breve descrição que aparecerá na listagem e nos resultados de busca."
    pubDate: "YYYY-MM-DD" # Data de publicação. Use o formato ANO-MÊS-DIA.
    heroImage: "../../../assets/nome-da-imagem.jpg" # Caminho relativo para a imagem de capa.
    tags: ["chave-da-tag-1", "chave-da-tag-2"] # Lista de chaves de tags (veja abaixo).
    ads: true # (Opcional) Adicione esta linha para marcar o post como publicidade.
    ---

    O conteúdo do seu post começa aqui...
    ```

### Otimizando Imagens

Para garantir que o site permaneça rápido, todas as imagens de capa (`heroImage`) devem ser otimizadas. Foi criado um comando para automatizar esse processo.

**Quando usar:** Após adicionar um novo arquivo de imagem (ex: `.jpg`) na pasta `src/assets`.

**Como usar:**
1.  Adicione sua imagem original em `src/assets`.
2.  Execute o seguinte comando no terminal:
    ```bash
    npm run optimize
    ```
3.  O script irá automaticamente redimensionar e comprimir a imagem, sobrescrevendo o arquivo original com a versão otimizada.

### Gerenciando Tags (Categorias)

O sistema de tags é centralizado e preparado para múltiplos idiomas.

1.  **Como Funciona:** As tags nos posts são definidas por **chaves** (apelidos curtos em inglês, ex: `web-dev`, `crypto`). O site então usa o arquivo `src/i18n/ui.ts` para traduzir essas chaves para o nome e a URL corretos em cada idioma.

2.  **Para Adicionar uma Nova Tag:**
    1.  **Escolha uma Chave:** Pense em uma chave curta e descritiva em inglês (ex: `performance`).
    2.  **Edite `src/i18n/ui.ts`:** Adicione as traduções para a nova chave nos objetos `pt` e `en`. Siga o padrão existente:
        ```javascript
        // Dentro do objeto 'pt':
        'tags.performance.name': 'Performance',
        'tags.performance.slug': 'performance',

        // Dentro do objeto 'en':
        'tags.performance.name': 'Performance',
        'tags.performance.slug': 'performance',
        ```
    3.  **Use a Chave no Post:** Agora você pode usar a chave `performance` na lista de `tags` do seu post.

3.  **Exibição das Categorias:** As páginas de categoria (`/pt/categorias` e `/en/categories`) foram projetadas para exibir **todas as tags definidas** em `ui.ts`, mesmo que uma tag ainda não tenha sido usada em nenhum post daquele idioma. A contagem de posts será simplesmente "0". Isso garante que a lista de categorias seja consistente em todo o site.
