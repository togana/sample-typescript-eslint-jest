const nextJest = require('next/jest')
// Optionally provide path to Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest()

// Any custom config you want to pass to Jest
const customJestConfig = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
