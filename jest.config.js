module.exports = {
  rootDir: '.',
  projects: [
    {
      displayName: 'testing-library',
      testMatch: ['<rootDir>/test/testing-library/**/.spec.js'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
      },
    },
    {
      displayName: 'test-utils',
      testMatch: ['<rootDir>/test/test-utils/**/.spec.js'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
      },
    },
  ],
  moduleFileExtensions: ['ts', 'js', 'vue', 'json', 'yaml'],
  collectCoverageFrom: ['<rootDir>/src/**/*.([tj]s|vue)'],
}
