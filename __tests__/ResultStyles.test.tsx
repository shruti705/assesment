import { StyleSheet } from 'react-native';
import styles from '../src/component/Result/ResultStyle';

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
  it('should have correct styles for container', () => {
    expect(styles.container).toEqual({
      flex: 1,
      backgroundColor: '#1a2330',
    });
  });

  it('should have correct styles for contentcontainer', () => {
    expect(styles.contentcontainer).toEqual({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    });
  });

  it('should have correct styles for result', () => {
    expect(styles.result).toEqual({
      fontSize: 20,
      fontWeight: 'bold',
      margin: '4%',
      color: 'white',
    });
  });

  it('should have correct styles for image', () => {
    expect(styles.image).toEqual({
      width: '80%',
      height: '20%',
      marginVertical: '5%',
    });
  });
});
