import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootState} from '../redux/store';
import {RootStackParamList} from '../navigation/types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ImageAssets} from '../../assets/ImageAssets';
import OutlineButton from '../component/stylecomponent/OutlineButton';

type ResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Result'
>;

type Props = {
  navigation: ResultScreenNavigationProp;
};

const ResultScreen: React.FC<Props> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const score = useSelector((state: RootState) => state.score.score);

  const getCategory = () => {
    if (score <= 7) return 'Low';
    if (score <= 13) return 'Medium';
    return 'High';
  };

  const getImageForCategory = (category: string) => {
    switch (category) {
      case 'Low':
        return ImageAssets.risk_low;
      case 'Medium':
        return ImageAssets.risk_medium;
      case 'High':
        return ImageAssets.risk_high;
      default:
        return null;
    }
  };

  const riskCategory = getCategory();
  const imageSource = getImageForCategory(riskCategory);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1a2330" barStyle="light-content" />
      <View style={styles.contentcontainer}>
        {imageSource && (
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <Text style={styles.result}>Your Risk Profile Score: {score}</Text>
        <Text style={styles.result}>Risk Category: {getCategory()}</Text>
        <OutlineButton title="Retake Questionnaire"
          onPress={() => navigation.navigate('Questionnaire')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2330',
  },
  contentcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: "4%",
    color: 'white',
  },
  image: {
    width: '80%',
    height: "20%",
    marginVertical: "5%",
  },
});

export default ResultScreen;
