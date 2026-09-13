import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const password = process.env.STATICRYPT_PASSWORD;

if (!password) {
  console.error('❌ Error: STATICRYPT_PASSWORD environment variable is not set!');
  console.error('Please set STATICRYPT_PASSWORD in your .env file or repository secrets.');
  process.exit(1);
}

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('❌ Error: dist/ directory does not exist. Run "astro build" first.');
  process.exit(1);
}

// Function to recursively find all .html files in dist directory
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  
  return results;
}

const htmlFiles = getHtmlFiles(distDir);

if (htmlFiles.length === 0) {
  console.warn('⚠️ Warning: No HTML files found in dist/ to encrypt.');
  process.exit(0);
}

console.log(`🔒 Encrypting ${htmlFiles.length} HTML page(s) in dist/ using StatiCrypt...`);

htmlFiles.forEach((filePath, index) => {
  const relativePath = path.relative(distDir, filePath);
  const targetDir = path.dirname(filePath);
  const pageTitle = `🔒 Protected Notes - ${path.basename(filePath, '.html')}`;

  console.log(`  [${index + 1}/${htmlFiles.length}] Encrypting: ${relativePath}`);

  const command = [
    'npx', 'staticrypt',
    `"${filePath}"`,
    '-d', `"${targetDir}"`,
    '-p', `"${password}"`,
    '--remember', '30',
    '--short',
    '--template-title', `"${pageTitle}"`,
    '--template-instructions', '"Enter password to unlock Semester 2 study notes"',
    '--template-color-primary', '"#6366f1"',
    '--template-color-secondary', '"#0f172a"'
  ].join(' ');

  try {
    execSync(command, { stdio: 'ignore' });
  } catch (err) {
    console.error(`❌ Failed to encrypt ${relativePath}:`, err.message);
    process.exit(1);
  }
});

console.log('✅ All HTML files successfully encrypted in dist/!');
