module.exports = {
  testEnvironment: 'jsdom',  // Enables DOM testing for React components
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Adds custom matchers
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    }], // Transform JS/JSX files with Babel
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testMatch: [
    '**/__tests__/**/*.(js|jsx)',
    '**/*.(test|spec).(js|jsx)'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // Mock CSS imports
  }
};