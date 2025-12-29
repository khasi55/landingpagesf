const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// List of images we converted to WebP
const convertedImages = [
    'reviews-rays.png',
    'step1-image.png',
    'step2-image.png',
    'frame-cta.png',
    'how-it-works-bg.png',
    'feature-spreads.png',
    'feature-global.png',
    'jellyfish-figma.png',
    'step3-final.png',
    ...Array.from({ length: 12 }, (_, i) => `payout_${i + 1}.png`),
];

console.log('🔄 Updating image references from .png to .webp...\n');

let totalUpdates = 0;

for (const imageName of convertedImages) {
    const searchPattern = imageName.replace('.png', '');

    // Use ripgrep to find all occurrences
    try {
        const grepCommand = `rg -l "${searchPattern}\\.png" src/`;
        const output = execSync(grepCommand, { encoding: 'utf-8', cwd: path.join(__dirname, '..') });
        const files = output.trim().split('\n').filter(Boolean);

        if (files.length === 0) continue;

        console.log(`📝 ${imageName} (found in ${files.length} files)`);

        for (const file of files) {
            const filePath = path.join(__dirname, '..', file);
            let content = fs.readFileSync(filePath, 'utf-8');
            const originalContent = content;

            // Replace .png with .webp
            content = content.replace(
                new RegExp(searchPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\.png', 'g'),
                searchPattern + '.webp'
            );

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf-8');
                const count = (originalContent.match(new RegExp(searchPattern + '\\.png', 'g')) || []).length;
                console.log(`   ✅ ${file} (${count} reference${count > 1 ? 's' : ''})`);
                totalUpdates += count;
            }
        }
    } catch (error) {
        // No matches found, continue
    }
}

console.log(`\n🎉 Updated ${totalUpdates} image references to WebP format!`);
console.log(`\n📝 Don't forget to:`);
console.log(`   1. Test the site to ensure all images load correctly`);
console.log(`   2. Commit the optimized .webp images`);
console.log(`   3. Keep .png files as fallback for older browsers`);
