import { StyleSheet } from 'react-native';
import styles from '../src/component/Questionnaire/QuestionStyles'; // Adjust the import path

jest.mock('react-native', () => {
  const ReactNative = jest.requireActual('react-native');
  return {
    ...ReactNative,
    StyleSheet: {
      create: jest.fn((styles) => styles),
    },
  };
});

describe('Styles', () => {
  it('should have the correct styles for container', () => {
    expect(styles.container).toEqual({
      flex: 1,
      backgroundColor: '#1a2330',
    });
  });

  it('should have the correct styles for contentcontainer', () => {
    expect(styles.contentcontainer).toEqual({
      flex: 1,
      margin: 10,
    });
  });

  it('should have the correct styles for welcome', () => {
    expect(styles.welcome).toEqual({
      fontSize: 18,
      fontWeight: 'bold',
      margin: '5%',
      color: 'white',
    });
  });

  it('should have the correct styles for question', () => {
    expect(styles.question).toEqual({
      fontSize: 20,
      fontWeight: 'bold',
      margin: '5%',
      color: 'white',
    });
  });

  it('should have the correct styles for card', () => {
    expect(styles.card).toEqual({
      backgroundColor: 'white',
      borderRadius: 8,
      padding: '5%',
      elevation: 3,
      margin: '2%',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      width: '90%',
      alignItems: 'flex-start',
    });
  });

  it('should have the correct styles for selectedCard', () => {
    expect(styles.selectedCard).toEqual({
      backgroundColor: '#00E0F5',
    });
  });

  it('should have the correct styles for optionText', () => {
    expect(styles.optionText).toEqual({
      fontSize: 18,
      textAlign: 'left',
      color: '#708090',
    });
  });

  it('should have the correct styles for selectedOptionText', () => {
    expect(styles.selectedOptionText).toEqual({
      fontWeight: 'bold',
    });
  });
});
