
import sharp from 'sharp';
import fg from 'fast-glob';
import { stat } from 'node:fs/promises';

const imagePaths = await fg('src/assets/*.jpg');

console.log(`Found ${imagePaths.length} images. Checking which ones to optimize...`);

let optimizedCount = 0;

for (const imagePath of imagePaths) {
    try {
        const image = sharp(imagePath);
        const metadata = await image.metadata();
        const originalSize = (await stat(imagePath)).size / 1024;

        // Only optimize if the image is wider than 1200px
        if (metadata.width && metadata.width > 1200) {
            const buffer = await image
                .resize(1200)
                .jpeg({ quality: 80, progressive: true })
                .toBuffer();
            
            await sharp(buffer).toFile(imagePath);

            const newSize = (await stat(imagePath)).size / 1024;
            console.log(`✅ Optimized ${imagePath}: ${originalSize.toFixed(2)} KB -> ${newSize.toFixed(2)} KB`);
            optimizedCount++;
        }
    } catch (error) {
        console.error(`❌ Failed to process ${imagePath}:`, error);
    }
}

if (optimizedCount > 0) {
    console.log(`
Successfully optimized ${optimizedCount} new images.`);
} else {
    console.log('
No new large images to optimize. All good!');
}

