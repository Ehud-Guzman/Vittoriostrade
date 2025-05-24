import fs from 'fs';
import path from 'path';

// Adjust these paths based on your setup
const imagesDir = path.resolve('public/images/products');
const productsFile = path.resolve('src/data/products.js');  // Or products.json

try {
  // 1. Rename image files to replace spaces with dashes
  const files = fs.readdirSync(imagesDir);
  files.forEach((file) => {
    const oldPath = path.join(imagesDir, file);
    const newFileName = file.replace(/\s+/g, '-');
    const newPath = path.join(imagesDir, newFileName);
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: "${file}" → "${newFileName}"`);
    }
  });

  // 2. Update product data file image paths
  let productsData = fs.readFileSync(productsFile, 'utf-8');

  // Replace occurrences of image paths in the file
  productsData = productsData.replace(
    /images\/products\/([\w\s\-]+)\.(webp|png|jpg|jpeg)/gi,
    (match, filename, ext) => {
      const safeFileName = filename.replace(/\s+/g, '-');
      return `images/products/${safeFileName}.${ext}`;
    }
  );

  fs.writeFileSync(productsFile, productsData, 'utf-8');
  console.log('✅ Updated product data image paths successfully!');

} catch (err) {
  console.error('❌ Error during renaming/updating:', err);
}
