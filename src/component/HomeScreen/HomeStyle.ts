import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a2330',
    },
    subContainer: {
      marginTop : "10%",
      marginLeft : "7%",
    },
    image: {
      width: 166,
      resizeMode: "contain",
    },
    title_welcome :{
      fontSize: 25,
      fontWeight: "700",
      color: "white",
      marginTop :"5%",
      marginLeft :"3%",
    },
    textContainer: {
      marginTop: "20%",
      justifyContent: "center",
      alignItems: "center",
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
      marginTop : "4%",
      paddingLeft: "5%",
      color: "black",
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: "white",
      textAlign: "left",
      borderColor: "white",
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: "5%",
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTextTitle:{
      fontSize: 18,
      color: 'black',
      marginBottom: "5%",
    },
    modalText: {
      fontSize: 18,
      color: 'black',
      marginBottom: "5%",
    },
    modalButton: {
      backgroundColor: "#1a2330",
      padding: "5%",
      borderRadius: 5,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });

  export default styles;