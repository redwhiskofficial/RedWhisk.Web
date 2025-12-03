const fs = require('fs');
const path = require('path');

const WORKER_URL = 'https://r2-worker.redwhiskofficial.workers.dev';
const VIDEOS_DIR = path.join(__dirname, '../videos');

async function uploadFile(filename) {
    const filePath = path.join(VIDEOS_DIR, filename);
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

    console.log(`Starting upload for ${filename} (${fileSizeInMegabytes.toFixed(2)} MB)...`);

    try {
        const fileStream = fs.createReadStream(filePath);

        // Use fetch to PUT the file to the worker
        const response = await fetch(`${WORKER_URL}/${filename}`, {
            method: 'PUT',
            headers: {
                'Content-Length': fileSizeInBytes,
                'Content-Type': 'application/octet-stream' // Or specific mime type if known
            },
            body: fileStream,
            duplex: 'half' // Required for streaming bodies in Node's fetch
        });

        if (response.ok) {
            console.log(`✅ Successfully uploaded ${filename}`);
        } else {
            console.error(`❌ Failed to upload ${filename}: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error('Response:', text);
        }
    } catch (error) {
        console.error(`❌ Error uploading ${filename}:`, error);
    }
}

async function main() {
    try {
        const files = fs.readdirSync(VIDEOS_DIR);

        // Filter for video files if needed, or just upload everything in the folder
        const videoFiles = files.filter(file =>
            ['.mp4', '.mov', '.avi', '.mkv'].includes(path.extname(file).toLowerCase())
        );

        console.log(`Found ${videoFiles.length} video files to upload.`);

        for (const file of videoFiles) {
            await uploadFile(file);
        }

        console.log('All uploads processed.');
    } catch (error) {
        console.error('Error reading videos directory:', error);
    }
}

main();
