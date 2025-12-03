
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, 'src', 'news_repository.json');
const dest = path.join(__dirname, 'dist', 'news_repository.json');

if (fs.existsSync(src)) {
    if (!fs.existsSync(path.join(__dirname, 'dist'))) {
        fs.mkdirSync(path.join(__dirname, 'dist'));
    }
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
} else {
    console.error(`Source file not found: ${src}`);
    process.exit(1);
}
