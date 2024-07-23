import { StyleSheet } from "react-native";
import { AppColors } from "../Constants/Constants";

const styles = StyleSheet.create({
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTextTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
    },
    modalText: {
      fontSize: 16,
      color: 'black',
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: AppColors.placeholder_text,
      padding: 10,
      borderRadius: 5,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });

  export default styles;