module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/test/**/*.test.{js,jsx,ts,tsx}',
  ],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'jsx', 'node', 'mjs'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{ts,tsx,js,jsx}',
    '<rootDir>/src/hooks/**/*.{ts,tsx,js,jsx}',
    '<rootDir>/src/styles/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/src/styles/overrides/*.{ts,tsx,js,jsx}',
  ],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/test/mockMuiStyles.js',
    '<rootDir>/test/documentRangeMock.js',
    '<rootDir>/src/jest.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      statements: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test/imageMock.js',
    '\\.(css)$': '<rootDir>/test/emptyMock.js',
  },
  globals: {
    'ts-jest': {
      module: 'commonjs',
    },
  },
};
