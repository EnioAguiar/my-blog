
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

// Pega a URL do argumento da linha de comando
const url = process.argv[2];

if (!url) {
  console.error('Por favor, forneça uma URL como argumento.');
  process.exit(1);
}

async function scrapeArticle(url) {
  try {
    // 1. Baixa o HTML da página
    console.log(`Buscando conteúdo de: ${url}`);
    const { data: html } = await axios.get(url, {
        // Simula um navegador para evitar bloqueios simples
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    });

    // 2. Carrega o HTML no Cheerio para análise
    const $ = cheerio.load(html);

    // 3. Extrai o título e o conteúdo do artigo
    // Tenta encontrar o título da página, com fallback para o título Open Graph
    const title = $('h1').first().text().trim() || $('meta[property="og:title"]').attr('content')?.trim();
    
    // Tenta encontrar o conteúdo principal dentro de tags <article> ou <div> com classes comuns
    let content = '';
    const articleBody = $('article').text() || $('.post-content').text() || $('.entry-content').text() || $('#content').text();
    
    if (articleBody.trim().length > 100) { // Usa a tag <article> se tiver um conteúdo substancial
        content = articleBody;
    } else { // Senão, junta todos os parágrafos <p>
        $('p').each((i, el) => {
            content += $(el).text().trim() + '\n\n';
        });
    }

    // Limpa o conteúdo extraído
    content = content.replace(/\s\s+/g, ' ').trim();

    // 4. Exibe o resultado
    console.log('\n--- TÍTULO ---');
    console.log(title);
    console.log('\n--- CONTEÚDO EXTRAÍDO ---');
    console.log(content);

  } catch (error) {
    console.error(`Erro ao processar a URL: ${error.message}`);
    if (error.response) {
        console.error(`Status: ${error.response.status}`);
    }
  }
}

scrapeArticle(url);
