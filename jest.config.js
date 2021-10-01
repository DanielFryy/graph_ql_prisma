module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/setupAfterEnv.ts'],
  moduleDirectories: ['node_modules', 'src'],
};
