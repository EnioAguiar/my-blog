
import sharp from 'sharp';
import fg from 'fast-glob';
import { stat, access } from 'node:fs/promises';
import path from 'node:path';

// Função para verificar se um arquivo existe
async function fileExists(filePath) {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
}

const imagePaths = await fg(['src/assets/*.jpg', 'src/assets/*.png']);

console.log(`Found ${imagePaths.length} images. Checking which ones to optimize and convert to WebP...`);

let optimizedCount = 0;

for (const imagePath of imagePaths) {
    const { dir, name } = path.parse(imagePath);
    const webpOutputPath = path.join(dir, `${name}.webp`);

    // Verifica se a versão WebP já existe
    if (await fileExists(webpOutputPath)) {
        continue; // Pula para a próxima imagem se a versão WebP já existir
    }

    try {
        const image = sharp(imagePath);
        const metadata = await image.metadata();
        const originalSize = (await stat(imagePath)).size / 1024;

        let processedImage = image;
        let resized = false;

        if (metadata.width && metadata.width > 1200) {
            processedImage = processedImage.resize(1200);
            resized = true;
        }

        const webpBuffer = await processedImage
            .webp({ quality: 80 })
            .toBuffer();

        await sharp(webpBuffer).toFile(webpOutputPath);

        const webpSize = (await stat(webpOutputPath)).size / 1024;

        if (resized) {
            console.log(`✅ Redimensionada e convertida para WebP: ${imagePath} (${originalSize.toFixed(2)} KB) -> ${webpOutputPath} (${webpSize.toFixed(2)} KB)`);
        } else {
            console.log(`✅ Convertida para WebP: ${imagePath} (${originalSize.toFixed(2)} KB) -> ${webpOutputPath} (${webpSize.toFixed(2)} KB)`);
        }
        optimizedCount++;

    } catch (error) {
        console.error(`❌ Falha ao processar ${imagePath}:`, error);
    }
}

if (optimizedCount > 0) {
    console.log(`
Sucesso! ${optimizedCount} imagens novas foram otimizadas e convertidas para WebP.`);
} else {
    console.log(`
Nenhuma imagem nova para otimizar.`);
}

