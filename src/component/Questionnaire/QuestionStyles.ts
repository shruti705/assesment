import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2330',
  },
  contentcontainer: {
    flex: 1,
    margin: 10,
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: '5%',
    color: '#ffffff',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: '5%',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: "5%",
    elevation: 3,
    margin: '2%',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: '90%',
    alignItems: 'flex-start',
  },
  selectedCard: {
    backgroundColor: '#00E0F5',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'left',
    color:"00E0F5",
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
});
export default styles;
