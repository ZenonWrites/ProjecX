const fs = require('fs');
const path = require('path');

function convertFile(filePath) {
  try {
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove TypeScript type annotations (simplified)
    content = content
      // Remove type annotations from function parameters
      .replace(/\(\s*([a-zA-Z0-9_$]+)\s*:\s*[a-zA-Z0-9_$\[\]{}|<>?, ]+\s*(?=[),])/g, '($1')
      // Remove type annotations from function returns
      .replace(/\)\s*:\s*[a-zA-Z0-9_$\[\]{}|<>?, ]+\s*(?=[{=>])/g, ')')
      // Remove interface and type declarations
      .replace(/\b(interface|type)\s+[a-zA-Z0-9_$]+\s*({[^}]*}|[^;{]*);?/g, '')
      // Remove import type statements
      .replace(/import\s+type\s+{[^}]*}\s+from\s+['"][^'"]+['"];?/g, '')
      // Remove type assertions (as Type)
      .replace(/\s+as\s+[a-zA-Z0-9_$]+/g, '');
    
    // Change file extension to .jsx
    const newPath = filePath.replace(/\.tsx$/, '.jsx');
    
    // Write the converted content to the new file
    fs.writeFileSync(newPath, content);
    console.log(`Converted: ${filePath} -> ${newPath}`);
    
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
      // Skip node_modules and other non-source directories
      if (!['node_modules', 'dist', 'build', '.next'].includes(file)) {
        processDirectory(fullPath);
      }
    } else if (file.endsWith('.tsx')) {
      convertFile(fullPath);
    }
  });
}

// Start processing from the project directory
const projectDir = path.join(__dirname, 'project', 'src');
console.log(`Starting conversion in directory: ${projectDir}`);
processDirectory(projectDir);

console.log('Conversion completed!');
