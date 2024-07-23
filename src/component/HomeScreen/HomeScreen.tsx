import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';  
import { ImageAssets } from '../../../assets/ImageAssets';
import OutlineButton from '../stylecomponent/OutlineButton';
import { useDispatch } from 'react-redux';
import { setName, setContact } from '../redux/userSlice';
import styles from './HomeStyle';
import { AppColors, Constants } from '../Constants/Constants';
import ReusableModal from '../stylecomponent/ReusableModalStyle';
import AppModal from '../stylecomponent/AppModal';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setNameInput] = useState('');
  const [contact, setContactInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      setModalVisible(true);
      return;
    }

    if (!contact.trim()) {
      setErrorMessage('Please enter your contact number.');
      setModalVisible(true);
      return;
    }

    if (!/^\d{10,12}$/.test(contact)) {
      setErrorMessage('Please enter a valid contact number.');
      setModalVisible(true);
      return;
    }

    dispatch(setName(name));
    dispatch(setContact(contact));
    navigation.navigate('Questionnaire');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={AppColors.placeholder_text} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={ImageAssets.rak_bank_logo} style={styles.image} />
          <Text style={styles.title_welcome}>{Constants.title_welcome}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textSubHeader}>{Constants.title}</Text>
          <TextInput
            testID="nameTextField"
            style={styles.textInput}
            placeholder={Constants.enter_name}
            placeholderTextColor={AppColors.placeholder_text}
            textAlign="left"
            value={name}
            onChangeText={(text) => setNameInput(text)}
          />
          <TextInput
            testID="mobileTextField"
            keyboardType="numeric"
            maxLength={12}
            style={styles.textInput}
            placeholder={Constants.enter_contact}
            placeholderTextColor={AppColors.placeholder_text}
            textAlign="left"
            value={contact}
            onChangeText={(text) => setContactInput(text)}
          />
          <OutlineButton
            title={Constants.btn_start_questionnaire}
            onPress={handleLogin}
          />
        </View>
        
        <AppModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          message={errorMessage}
          />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
