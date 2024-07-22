import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/types';  
import { ImageAssets } from '../../../assets/ImageAssets';
import OutlineButton from '../Stylecomponent/OutlineButton';
import { useDispatch } from 'react-redux';
import { setName } from '../Redux/userSlice';
import styles from './HomeStyle';


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



export default HomeScreen;
