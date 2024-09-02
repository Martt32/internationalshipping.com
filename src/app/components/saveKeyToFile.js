const fs = require('fs');
const path = require('path');
// const { generateKeys } = require('../utils/keyGenerator'); // Import the key generator function

function generateKeys(count) {
    const keys = [];
  
    for (let i = 0; i < count; i++) {
      // Generate a random 10-character alphanumeric string
      const randomString = Math.random().toString(36).substring(2, 12).toUpperCase();
      // Combine it with the prefix "key_"
      const key = `key_${randomString}`;
  
      keys.push(key);
    }
  
    return keys;
  }
  


const keys = generateKeys(25); // Generate 10 keys (change the number as needed)

const filePath = path.join(process.cwd(), 'keys.json'); // Define the path to save the file

fs.writeFileSync(filePath, JSON.stringify(keys, null, 2), 'utf-8'); // Write keys to JSON file

console.log('Keys saved to keys.json');