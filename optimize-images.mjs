
import sharp from 'sharp';
import fg from 'fast-glob';
import { stat } from 'node:fs/promises';
import path from 'node:path'; // Importar o módulo path

const imagePaths = await fg(['src/assets/*.jpg', 'src/assets/*.png']); // Incluir PNGs

console.log(`Found ${imagePaths.length} images. Checking which ones to optimize and convert to WebP...`);

let optimizedCount = 0;

for (const imagePath of imagePaths) {
    try {
        const image = sharp(imagePath);
        const metadata = await image.metadata();
        const originalSize = (await stat(imagePath)).size / 1024;

        let processedImage = image; // Stream da imagem para processamento
        let resized = false;

        // Redimensionar se a imagem for maior que 1200px
        if (metadata.width && metadata.width > 1200) {
            processedImage = processedImage.resize(1200);
            resized = true;
        }

        // Determinar o caminho de saída para o WebP
        const { dir, name } = path.parse(imagePath);
        const webpOutputPath = path.join(dir, `${name}.webp`);

        // Converter para WebP
        const webpBuffer = await processedImage
            .webp({ quality: 80 }) // Qualidade do WebP
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
Sucesso! ${optimizedCount} imagens otimizadas e convertidas para WebP.`);
} else {
    console.log(`
Nenhuma imagem nova para otimizar ou converter para WebP.`);
}

