import styles from '../src/component/HomeScreen/HomeStyle';

jest.mock('react-native', () => {
    const ReactNative = jest.requireActual('react-native');
    return {
      ...ReactNative,
      StyleSheet: {
        create: jest.fn((styles) => styles),
      },
    };
  });
  
describe('StyleSheet', () => {
  it('should match the snapshot', () => {
    expect(styles).toMatchSnapshot();
  });

  it('should have correct container styles', () => {
    expect(styles.container).toEqual({
      flex: 1,
      backgroundColor: '#1a2330',
    });
  });

  it('should have correct subContainer styles', () => {
    expect(styles.subContainer).toEqual({
      marginTop : "10%",
      marginLeft : "7%",
    });
  });

  it('should have correct image styles', () => {
    expect(styles.image).toEqual({
      width: 166,
      resizeMode: "contain",
    });
  });

  it('should have correct textContainer styles', () => {
    expect(styles.textContainer).toEqual({
      marginTop: "20%",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "5%",
      paddingLeft: "5%",
    });
  });

  it('should have correct textSubHeader styles', () => {
    expect(styles.textSubHeader).toEqual({
      marginTop: "2%",
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 20,
      color: "white",
    });
  });

  it('should have correct textInput styles', () => {
    expect(styles.textInput).toEqual({
      width: "100%",
      height: 56,
      marginTop : "4%",
      paddingLeft: "5%",
      color: "black",
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: "white",
      textAlign: "left",
      borderColor: "white",
    });
  });
});
