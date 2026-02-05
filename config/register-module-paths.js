/**
 * Register module path aliases for test execution
 * Maps @alias paths to their compiled locations in build/tests-dist
 */
const moduleAlias = require('module-alias');
const path = require('path');
const fs = require('fs');

// Load .env.local if it exists
const envPath = path.join(__dirname, '../apps/web/.env.local');
if (fs.existsSync(envPath)) {
  const dotenv = require('dotenv');
  dotenv.config({ path: envPath });
}

const buildDir = path.join(__dirname, '../build/tests-dist');

moduleAlias.addAliases({
  '@llm': path.join(buildDir, 'llm/src/index.js'),
  '@storage': path.join(buildDir, 'storage/src/index.js'),
  '@audio': path.join(buildDir, 'pipeline/audio-ingest/src/index.js'),
  '@transcription': path.join(buildDir, 'pipeline/transcribe/src/index.js'),
  '@transcript-assembly': path.join(buildDir, 'pipeline/assemble/src/index.js'),
  '@note-core': path.join(buildDir, 'pipeline/note-core/src/index.js'),
  '@note-rendering': path.join(buildDir, 'pipeline/render/src/index.js'),
  '@ui': path.join(buildDir, 'ui/src/index.js'),
});
