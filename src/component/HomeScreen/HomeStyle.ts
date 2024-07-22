import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a2330',
      justifyContent: "center",
    },
    subContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 166,
      height: 114,
      justifyContent: "center",
      alignItems: "center",
      resizeMode: "contain",
    },
    textContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingRight: "5%",
      paddingLeft: "5%",
    },
    textSubHeader: {
      marginTop: "2%",
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 20,
      color: "white",
    },
    textInput: {
      width: "100%",
      height: 56,
      marginVertical: "5%",
      paddingLeft: "5%",
      color: "black",
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: "white",
      textAlign: "left",
      borderColor: "white",
    },
  });

  export default styles;