import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};

export default config;
