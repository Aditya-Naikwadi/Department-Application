const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directory = path.join(__dirname, '../public/faculty');
const targetWidth = 800;
const targetQuality = 80;

if (!fs.existsSync(directory)) {
    console.error(`Directory not found: ${directory}`);
    process.exit(1);
}

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const filePath = path.join(directory, file);
            const tempPath = path.join(directory, `temp-${file}`);

            // Get stats to check size
            const stats = fs.statSync(filePath);
            const sizeInMB = stats.size / (1024 * 1024);

            if (sizeInMB > 0.5) { // Only optimize if larger than 0.5MB
                console.log(`Optimizing: ${file} (${sizeInMB.toFixed(2)} MB)`);

                sharp(filePath)
                    .resize(targetWidth, null, { withoutEnlargement: true }) // Maintain aspect ratio, don't upscale
                    .jpeg({ quality: targetQuality, mozjpeg: true }) // Convert to JPEG or keep format if possible (sharp handles format retention usually by extension, but let's force safe defaults or just auto)
                    // Actually, let's keep original format logic or just output generic optimization
                    .toFile(tempPath)
                    .then(info => {
                        console.log(`Success: ${file} -> ${(info.size / 1024).toFixed(2)} KB`);
                        // Replace original
                        fs.unlinkSync(filePath);
                        fs.renameSync(tempPath, filePath);
                    })
                    .catch(err => {
                        console.error(`Error optimizing ${file}:`, err);
                        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                    });
            } else {
                console.log(`Skipping: ${file} (Already small: ${sizeInMB.toFixed(2)} MB)`);
            }
        }
    });
});
