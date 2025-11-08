const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install required packages if not already installed
try {
  require.resolve('@babel/parser');
  require.resolve('@babel/traverse');
  require.resolve('@babel/types');
  require.resolve('@babel/generator');
  require.resolve('@babel/preset-typescript');
  require.resolve('@babel/preset-react');
} catch (e) {
  console.log('Installing required packages...');
  execSync('npm install --save-dev @babel/parser @babel/traverse @babel/types @babel/generator @babel/preset-typescript @babel/preset-react', { stdio: 'inherit' });
}

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;
const { transform } = require('@babel/core');

function convertFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove type annotations and convert TSX to JSX
    const result = transform(content, {
      filename: filePath,
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [
        // Remove type annotations
        '@babel/plugin-transform-typescript',
        // Convert to JSX
        '@babel/plugin-transform-react-jsx',
      ],
    });

    const newContent = result.code;
    const newPath = filePath.replace(/\.tsx$/, '.jsx');
    
    fs.writeFileSync(newPath, newContent);
    console.log(`Converted: ${filePath} -> ${newPath}`);
    
    // Remove the original .tsx file
    fs.unlinkSync(filePath);
    console.log(`Removed: ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx')) {
      convertFile(fullPath);
    }
  });
}

// Start processing from the project directory
const projectDir = path.join(__dirname, 'project', 'src');
console.log(`Starting conversion in directory: ${projectDir}`);
processDirectory(projectDir);

// Also process any .tsx files in the root project directory
const rootFiles = fs.readdirSync(projectDir);
rootFiles.forEach(file => {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(projectDir, file);
    convertFile(fullPath);
  }
});

console.log('Conversion completed!');
