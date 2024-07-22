import React from 'react';
import { render, cleanup, waitFor } from "@testing-library/react-native";
import { act } from "react-test-renderer";
import App from "../App"; // Ensure this path is correct
import renderer from 'react-test-renderer';
const MockNavigator = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const MockScreen = ({ component: Component }: { name: string; component: React.ComponentType }) => (Component ? <Component /> : null);

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
    NavigationContainer: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
  };
});

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: () => {
      return { Navigator: MockNavigator, Screen: MockScreen };
    },
  };
});

jest.mock("../src/component/HomeScreen/HomeScreen", () => 'HomeScreen');
jest.mock("../src/component/Questionnaire/QuestionnaireScreen", () => 'QuestionnaireScreen');
jest.mock("../src/component/Result/ResultScreen", () => 'ResultScreen');

describe("AppNavigator", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  
  test('renders correctly', () => {
    const getByText = renderer.create(
      <App />
    ).toJSON();

    expect(getByText).toMatchSnapshot();
  });
});
