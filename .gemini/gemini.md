# Guia de Contexto do Projeto: Blog Brain Noises

Este arquivo serve como a fonte de verdade para agentes de IA que trabalham neste projeto. Ele define a arquitetura, os fluxos de trabalho, as convenções e o tom de voz a ser seguido.

##  Arquitetura do Projeto

- **Framework**: Astro
- **Conteúdo**: Arquivos Markdown/MDX em `src/content/blog/`. A estrutura do frontmatter é definida em `src/content.config.ts`.
- **Componentes**: Componentes Astro reutilizáveis (`.astro`) estão em `src/components/`.
- **Páginas**: As rotas são geradas a partir de `src/pages/`.
- **Imagens**: Todas as imagens dos posts devem ser colocadas em `src/assets/`.
- **Textos e Tags**: A configuração de tags e textos da interface (UI) está centralizada em `src/i18n/ui.ts`.

---

## Comandos Essenciais

| Comando | Ação |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Compila o site para produção. |
| `npm run optimize` | **OBRIGATÓRIO.** Otimiza novas imagens na pasta `src/assets`. Deve ser executado antes de cada commit que inclua novas imagens. |
| `npm run format` | Formata todo o código com Prettier. |
| `npm run lint` | Analisa a qualidade do código com ESLint. |

---

## Fluxo de Trabalho de Conteúdo

Para criar um novo post:

1. **Crie um arquivo `.md`** em `src/content/blog/`.
2. **Adicione o frontmatter obrigatório.**
   - A data (`pubDate`) **deve** estar no formato `YYYY-MM-DDTHH:MM:SSZ`.
   - A imagem (`heroImage`) **deve** ser importada usando o alias de path: ` '@/assets/nome-da-imagem.webp'`.
   - As tags (`tags`) **devem** usar as chaves definidas em `src/i18n/ui.ts`.
    ```markdown
    ---
    title: 'Título do Post'
    description: 'Descrição curta do post'
    pubDate: '2025-08-13T16:18:00Z'
    heroImage: '@/assets/nome-da-imagem.webp'
    tags: ['tag-key']
    ---
    ```
3. **Adicione as novas imagens** à pasta `src/assets/`.
4. **Execute `npm run optimize`** para converter e otimizar as novas imagens para o formato `.webp`. Este passo é crucial.

---

## Convenções de Código

### Sistema de Tags

As tags são gerenciadas em `src/i18n/ui.ts`. No frontmatter de um post, **use sempre a chave da tag**, não o nome de exibição.

**Exemplo:** Para a tag "Astro", use a chave `astro-stack`.

```ts
// src/i18n/ui.ts
export const tags = {
  'astro-stack': 'Astro'
  // ...
}
```

---

## ️ Tom de Voz (Voice and Tone)

A escrita deve ser **pessoal, opinativa e humana**. O objetivo é escrever como um especialista apaixonado conversando com um colega, não como um jornalista reportando fatos.

**1. Seja Humano, Não um Robô**
- **Escreva em primeira pessoa:** Use "Eu acho", "Na minha opinião", "Isso me surpreendeu".
- **Use uma linguagem conversacional:** Faça perguntas, use contrações.
- **Evite jargões corporativos:** Vá direto ao ponto.

**2. Tenha uma Opinião Forte**
- **Analise, não apenas descreva:** Qual é o impacto real? É uma boa ideia? É uma tendência perigosa?
- **Seja cético quando necessário:** Questione o marketing, o hype e as promessas.

**3. Abrace a Emoção (Com Inteligência)**
- **Animação:** Fique genuinamente animado com tecnologias que resolvem problemas reais.
- **Sarcasmo e Ironia:** Use para criticar tendências absurdas ou marketing exagerado.
- **Seriedade:** Adote um tom grave ao discutir falhas de segurança ou problemas éticos.
- **Frustração:** Demonstre frustração com práticas anti-consumidor ou decisões ruins da indústria.

### Exemplos Práticos

| Em vez de... (Estilo Jornal) | Prefira... (Estilo Brain Noises) |
| :--- | :--- |
| "Foi anunciado um novo framework JavaScript." | "E lá vamos nós de novo... mais um framework foi jogado na arena." |
| "O produto oferece funcionalidades inovadoras." | "Eles dizem que é 'inovador', mas vamos ser honestos: o que ele faz de verdade?" |
| "É importante notar os riscos de segurança." | "Isso é uma falha de segurança esperando para acontecer. É inaceitável." |
