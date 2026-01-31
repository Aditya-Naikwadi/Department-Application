const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../public/faculty');

if (!fs.existsSync(directoryPath)) {
    console.error(`Directory not found: ${directoryPath}`);
    process.exit(1);
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

fs.readdir(directoryPath, async (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    console.log(`Found ${files.length} files in ${directoryPath}`);

    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const tempFilePath = path.join(directoryPath, `temp-${file}`);
        const ext = path.extname(file).toLowerCase();

        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && !file.startsWith('temp-')) {
            try {
                // Process to buffer
                const buffer = await sharp(filePath)
                    .rotate() // Auto-orient based on EXIF
                    .toBuffer();

                // Write to temp file first
                fs.writeFileSync(tempFilePath, buffer);

                // Try to replace
                try {
                    // Add small delay to ensure handle is released if possible
                    await sleep(100);
                    fs.unlinkSync(filePath);
                    fs.renameSync(tempFilePath, filePath);
                    console.log(`Processed and corrected: ${file}`);
                } catch (writeErr) {
                    console.error(`Error replacing ${file} (locked?):`, writeErr.message);
                    // cleanup temp if failed
                    if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
                }

            } catch (error) {
                console.error(`Error processing ${file}:`, error);
            }
        }
    }
    console.log('All images processed.');
});
