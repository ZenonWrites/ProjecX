const fs = require('fs');
const path = require('path');

function removeTsxFiles(directory) {
  if (!fs.existsSync(directory)) {
    console.error(`Directory does not exist: ${directory}`);
    return;
  }

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

// Process the front directory
const frontDir = path.join(__dirname, 'front');
console.log(`Removing .tsx files from directory: ${frontDir}`);
removeTsxFiles(frontDir);

console.log('\nCleanup completed!');
