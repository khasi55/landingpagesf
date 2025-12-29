const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public/assets');

// List of images to compress and convert to WebP
const imagesToOptimize = [
    // Critical large images
    { input: 'reviews-rays.png', quality: 85, resize: { width: 1920 } },
    { input: 'step1-image.png', quality: 85, resize: { width: 1400 } },
    { input: 'step2-image.png', quality: 85, resize: { width: 1400 } },
    { input: 'frame-cta.png', quality: 85, resize: { width: 1000 } },
    { input: 'how-it-works-bg.png', quality: 80, resize: { width: 1920 } },
    { input: 'feature-spreads.png', quality: 85, resize: { width: 800 } },
    { input: 'feature-global.png', quality: 85, resize: { width: 800 } },
    { input: 'jellyfish-figma.png', quality: 80, resize: { width: 1400 } },
    { input: 'step3-final.png', quality: 85, resize: { width: 600 } },

    // Payout images - resize to 2x display size for retina
    ...Array.from({ length: 12 }, (_, i) => ({
        input: `payout_${i + 1}.png`,
        quality: 90,
        resize: { width: 256, height: 256 }
    })),
];

async function optimizeImages() {
    console.log('🎨 Starting image optimization...\n');

    let totalSaved = 0;
    let optimizedCount = 0;

    for (const config of imagesToOptimize) {
        const inputPath = path.join(publicDir, config.input);
        const outputPath = inputPath.replace('.png', '.webp');

        // Check if file exists
        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${config.input} - file not found`);
            continue;
        }

        try {
            // Get original file size
            const originalSize = fs.statSync(inputPath).size;

            // Optimize and convert to WebP
            let sharpInstance = sharp(inputPath);

            if (config.resize) {
                sharpInstance = sharpInstance.resize(config.resize.width, config.resize.height, {
                    fit: 'inside',
                    withoutEnlargement: true
                });
            }

            await sharpInstance
                .webp({ quality: config.quality })
                .toFile(outputPath);

            // Get new file size
            const newSize = fs.statSync(outputPath).size;
            const saved = originalSize - newSize;
            const savedPercent = ((saved / originalSize) * 100).toFixed(1);

            totalSaved += saved;
            optimizedCount++;

            console.log(`✅ ${config.input}`);
            console.log(`   ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (saved ${savedPercent}%)`);

        } catch (error) {
            console.error(`❌ Error optimizing ${config.input}:`, error.message);
        }
    }

    console.log(`\n🎉 Optimization complete!`);
    console.log(`   ${optimizedCount} images optimized`);
    console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Update image references from .png to .webp in components`);
    console.log(`   2. Add <picture> tags with PNG fallback for browser compatibility`);
}

optimizeImages().catch(console.error);
