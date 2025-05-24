import fs from 'fs';
import path from 'path';

// Folder where your React source code lives
const srcDir = path.resolve('src');

// File extensions to scan
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// Recursively scan folder for files with given extensions
function getFiles(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getFiles(fullPath));
    } else if (extensions.includes(path.extname(fullPath))) {
      files.push(fullPath);
    }
  }
  return files;
}

function updatePathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace "src/images/products/white maize.webp" to "/images/products/white-maize.webp"
  const newContent = content.replace(
    /src\/images\/products\/([\w\s\-\(\)]+)\.(webp|png|jpg|jpeg)/gi,
    (match, filename, ext) => {
      const safeFileName = filename.replace(/\s+/g, '-');
      return `/images/products/${safeFileName}.${ext}`;
    }
  );

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated image paths in: ${filePath}`);
  }
}

const files = getFiles(srcDir);
files.forEach(updatePathsInFile);
