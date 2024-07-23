module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-navigation|@react-navigation)/)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^react-native$': '<rootDir>/__mocks__/react-native.js',
    '^@react-navigation/stack$': '<rootDir>/__mocks__/@react-navigation/stack.js',
    '^@react-navigation/native$': '<rootDir>/__mocks__/@react-navigation/native.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Map image file types to a mock file
    '\\.(gif|jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
