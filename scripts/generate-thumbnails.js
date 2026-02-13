import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = path.resolve('src/assets/images');
const TARGET_WIDTH = 640;
const QUALITY = 75;
const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

const getOutputPath = (inputPath) => {
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, path.extname(inputPath));
  return path.join(dir, `${base}-thumb.webp`);
};

const shouldProcess = (entryName) => {
  const ext = path.extname(entryName).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) return false;
  return !entryName.includes('-thumb');
};

const processFile = async (inputPath) => {
  const outputPath = getOutputPath(inputPath);

  try {
    const [inputStat, outputStat] = await Promise.all([
      fs.stat(inputPath),
      fs.stat(outputPath).catch(() => null),
    ]);

    if (outputStat && outputStat.mtimeMs >= inputStat.mtimeMs) {
      return { status: 'skipped', inputPath };
    }
  } catch (error) {
    return { status: 'error', inputPath, error };
  }

  try {
    await sharp(inputPath)
      .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    return { status: 'created', inputPath, outputPath };
  } catch (error) {
    return { status: 'error', inputPath, error };
  }
};

const walkDirectory = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkDirectory(fullPath));
    } else if (shouldProcess(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
};

const run = async () => {
  try {
    await fs.access(SOURCE_DIR);
  } catch {
    console.error(`Source folder not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const files = await walkDirectory(SOURCE_DIR);
  if (files.length === 0) {
    console.log('No images found to process.');
    return;
  }

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const result = await processFile(file);
    if (result.status === 'created') {
      created += 1;
    } else if (result.status === 'skipped') {
      skipped += 1;
    } else {
      failed += 1;
      console.error(`Failed: ${file}`);
      if (result.error) {
        console.error(result.error);
      }
    }
  }

  console.log(`Thumbnails done. Created: ${created}, Skipped: ${skipped}, Failed: ${failed}`);
};

run();
