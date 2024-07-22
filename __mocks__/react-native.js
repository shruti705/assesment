// __mocks__/react-native.js
const React = require('react');
const { View, Text } = require('react-native');

module.exports = {
  ...jest.requireActual('react-native'),
  View: jest.fn(() => <View />),
  Text: jest.fn(() => <Text />),
};

// __mocks__/@react-navigation/stack.js
const createStackNavigator = jest.fn(() => ({
  Navigator: ({ children }) => <>{children}</>,
  Screen: () => null,
}));

module.exports = { createStackNavigator };

// __mocks__/@react-navigation/native.js
const NavigationContainer = ({ children }) => <>{children}</>;

module.exports = { NavigationContainer };
