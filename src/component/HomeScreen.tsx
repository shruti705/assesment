import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';  
import { ImageAssets } from '../../assets/ImageAssets';
import OutlineButton from './stylecomponent/OutlineButton';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/userSlice';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setNameInput] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setName(name));
    navigation.navigate('Questionnaire');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1a2330" barStyle="light-content" />
    <View style={styles.container}>
      
          <View style={styles.subContainer}>
            <Image source={ImageAssets.rak_bank_logo} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
              <Text style={styles.textSubHeader}>Calculate Risk Profile</Text>
            <TextInput
              testID="nameTextField"
              style={styles.textInput}
              placeholder="please enter your name"
              placeholderTextColor="#1a2330"
              textAlign="left"
              value={name}
              onChangeText={(text) => {
                setNameInput(text);
              }}
            />
          <OutlineButton title="Start Questionnaire"
          onPress={handleLogin} />
          </View>
    </View>
    </SafeAreaView>
  );
};

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

export default HomeScreen;
