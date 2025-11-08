const fs = require('fs');
const path = require('path');

function removeTsxFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-source directories
      if (!['node_modules', 'dist', 'build', '.next'].includes(file)) {
        removeTsxFiles(fullPath);
      }
    } else if (file.endsWith('.tsx')) {
      const jsxPath = fullPath.replace(/\.tsx$/, '.jsx');
      
      // Only remove .tsx file if corresponding .jsx file exists
      if (fs.existsSync(jsxPath)) {
        try {
          fs.unlinkSync(fullPath);
          console.log(`Removed: ${fullPath}`);
        } catch (error) {
          console.error(`Error removing ${fullPath}:`, error.message);
        }
      } else {
        console.warn(`Warning: No corresponding .jsx file found for ${fullPath}`);
      }
    }
  });
}

// Start processing from the project directory
const projectDir = path.join(__dirname, 'project', 'src');
console.log(`Removing .tsx files from directory: ${projectDir}`);
removeTsxFiles(projectDir);

// Also check the root src directory
const rootDir = path.join(__dirname, 'src');
if (fs.existsSync(rootDir)) {
  console.log(`\nRemoving .tsx files from directory: ${rootDir}`);
  removeTsxFiles(rootDir);
}

console.log('\nCleanup completed!');
