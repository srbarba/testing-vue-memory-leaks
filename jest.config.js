module.exports = {
  rootDir: process.cwd(),
  projects: [
    {
      displayName: 'testing-library',
      testMatch: ['<rootDir>/test/testing-library/**/*.spec.js'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
      },
      snapshotSerializers: ['jest-serializer-vue'],
    },
    {
      displayName: 'test-utils',
      testMatch: ['<rootDir>/test/test-utils/**/*.spec.js'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
      },
      snapshotSerializers: ['jest-serializer-vue'],
    },
    {
      displayName: 'with-setup',
      testMatch: ['<rootDir>/test/with-setup/**/*.spec.js'],
      transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
      },
      snapshotSerializers: ['jest-serializer-vue'],
      setupFiles: ['./jest.setup.js'],
    },
  ],
  moduleFileExtensions: ['ts', 'js', 'vue', 'json', 'yaml'],
  collectCoverageFrom: ['<rootDir>/src/**/*.([tj]s|vue)'],
}
