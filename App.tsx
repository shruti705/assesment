/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/component/HomeScreen/HomeScreen';
import QuestionnaireScreen from './src/component/Questionnaire/QuestionnaireScreen';
import ResultScreen from './src/component/Result/ResultScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBackImage from './src/component/Stylecomponent/HeaderBackImage';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackImage: HeaderBackImage,
          headerStyle: {backgroundColor: '#1a2330'},
          headerTintColor: '#1C262E',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionnaire"
          component={QuestionnaireScreen}
          options={{
            title: 'Risk Profile Questionnaire',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
