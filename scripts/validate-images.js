#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the project root directory
const projectRoot = path.resolve(__dirname, '..');
const assetsDir = path.join(projectRoot, 'src', 'assets');

// Image files that should exist
const requiredImages = [
  'logo.png',
  'hero_carousel_1.jpg',
  'hero_carousel_2.jpg',
  'hero_carousel_3.jpg',
  'hero_carousel_4.jpg',
  'hero_carousel_5.jpg'
];

// Function to check if image exists
function checkImageExists(imagePath) {
  try {
    return fs.existsSync(imagePath);
  } catch (error) {
    return false;
  }
}

// Main validation function
function validateImages() {
  console.log('🔍 Validating required images...');
  
  let allImagesExist = true;
  
  for (const image of requiredImages) {
    const imagePath = path.join(assetsDir, image);
    const exists = checkImageExists(imagePath);
    
    if (exists) {
      console.log(`✅ ${image} - Found`);
    } else {
      console.log(`❌ ${image} - Missing`);
      allImagesExist = false;
    }
  }
  
  if (allImagesExist) {
    console.log('\n🎉 All required images are present!');
    process.exit(0);
  } else {
    console.log('\n❌ Some required images are missing!');
    console.log('Please ensure all required images are in the src/assets directory.');
    process.exit(1);
  }
}

// Run validation
validateImages();