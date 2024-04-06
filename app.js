const fs = require('fs');
const path = require('path');

// configuring .env file
require('dotenv').config();

const url = process.env.API_ENDPOINT;
const filePath = path.join(__dirname, 'data.json');

// fetching and writing json data
async function getAndWriteData(url, filePath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from ${url}, status: ${res.status}`
      );
    }
    const data = await res.json();
    fs.writeFileSync(filePath, JSON.stringify(data));
    console.log(`Data successfully written to ${filePath}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getAndWriteData(url, filePath);
