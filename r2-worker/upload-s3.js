const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const fs = require('fs');
const path = require('path');

// Credentials from user provided image
const ACCOUNT_ID = 'f00d904a5eb814db9ae106dab4df1c76';
const ACCESS_KEY_ID = '69de3e3fa774ecb7edfc4e85efb70c58';
const SECRET_ACCESS_KEY = '5d033e8d3f4c9a7be66a0314618289f27b91dae57f9aae599fbf07266049fe73';
const BUCKET_NAME = 'redwhisk';

const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    },
});

const VIDEOS_DIR = path.join(__dirname, '../videos');

async function uploadFile(filename) {
    const filePath = path.join(VIDEOS_DIR, filename);
    const fileStream = fs.createReadStream(filePath);
    const stats = fs.statSync(filePath);

    console.log(`Starting upload for ${filename} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)...`);

    try {
        const upload = new Upload({
            client: s3,
            params: {
                Bucket: BUCKET_NAME,
                Key: filename,
                Body: fileStream,
                ContentType: 'video/mp4', // Defaulting to mp4, but R2 detects mostly
            },
        });

        upload.on('httpUploadProgress', (progress) => {
            const percentage = Math.round((progress.loaded / progress.total) * 100);
            process.stdout.write(`\rUploading ${filename}: ${percentage}%`);
        });

        await upload.done();
        console.log(`\n✅ Successfully uploaded ${filename}`);
    } catch (error) {
        console.error(`\n❌ Error uploading ${filename}:`, error);
    }
}

async function main() {
    const files = fs.readdirSync(VIDEOS_DIR);
    // Filter for the large files we know failed or just all videos to be safe (skipping already uploaded ones if we wanted, but overwriting is fine)
    // v2.mp4 and v3.mov were uploaded. v1.mov, v4.mp4, v5.mp4 failed.
    const targetFiles = ['v1.mov', 'v4.mp4', 'v5.mp4'];

    const videoFiles = files.filter(file => targetFiles.includes(file));

    console.log(`Found ${videoFiles.length} large video files to upload: ${videoFiles.join(', ')}`);

    for (const file of videoFiles) {
        await uploadFile(file);
    }
}

main();
