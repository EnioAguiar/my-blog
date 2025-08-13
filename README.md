# Blog Pessoal

Este é o repositório do meu blog pessoal, construído com [Astro](https://astro.build/).

## 🚀 Estrutura do Projeto

A estrutura de pastas segue o padrão de projetos Astro:

```
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
└── package.json
```

O Astro busca por arquivos `.astro` ou `.md` no diretório `src/pages/` para criar as rotas do site.

## 🛠️ Ferramentas de Desenvolvimento

O projeto está configurado com as seguintes ferramentas profissionais:

- **Prettier** - Formatação automática de código
- **ESLint** - Análise de qualidade de código
- **Astro Language Tools** - Suporte completo para Astro
- **Tailwind CSS IntelliSense** - Autocomplete para Tailwind CSS

## 🧞 Comandos

Todos os comandos devem ser executados a partir da raiz do projeto:

| Comando                | Ação                                                      |
| :--------------------- | :-------------------------------------------------------- |
| `npm install`          | Instala as dependências.                                  |
| `npm run dev`          | Inicia o servidor de desenvolvimento em `localhost:4321`. |
| `npm run build`        | Compila o site para produção na pasta `./dist/`.          |
| `npm run preview`      | Visualiza a versão de produção localmente.                |
| `npm run optimize`     | Otimiza imagens para WebP.                                |
| `npm run format`       | Formata todo o código automaticamente.                    |
| `npm run format:check` | Verifica se o código está formatado.                      |
| `npm run lint`         | Analisa a qualidade do código.                            |
| `npm run lint:fix`     | Corrige problemas de código automaticamente.              |

## 📝 Convenções de Código

- **Formatação:** O código é formatado automaticamente ao salvar
- **Qualidade:** ESLint verifica a qualidade do código em tempo real
- **Padrões:** Seguimos as melhores práticas do Astro e TypeScript

Para mais detalhes, consulte a [documentação do Astro](https://docs.astro.build).
