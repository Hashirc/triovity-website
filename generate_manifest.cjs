const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'posters');
const clients = ['carawan', 'mirable', 'pawpaths', 'rosticoco'];
const manifest = {};

clients.forEach(client => {
  const clientDir = path.join(baseDir, client);
  if (fs.existsSync(clientDir)) {
    // Read files and filter for images
    const files = fs.readdirSync(clientDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
    
    // Sort files logically if they have numbers (P1, P2, P10)
    files.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, '')) || 0;
      const numB = parseInt(b.replace(/\D/g, '')) || 0;
      return numA - numB;
    });

    manifest[client] = files.map(f => `/posters/${client}/${f}`);
  }
});

// Write to src/data
const outputDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(path.join(outputDir, 'postersData.json'), JSON.stringify(manifest, null, 2));
console.log('Successfully generated src/data/postersData.json');
