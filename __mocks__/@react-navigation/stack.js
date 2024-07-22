const createStackNavigator = () => ({
    Navigator: ({ children }) => <>{children}</>,
    Screen: () => null,
  });
  
  module.exports = { createStackNavigator };
  