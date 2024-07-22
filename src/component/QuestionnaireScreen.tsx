import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateScore} from './redux/scoreSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './navigation/types';
import {useIsFocused} from '@react-navigation/native';
import { RootState } from './redux/store';
import Questions from './Questions';

type QuestionnaireScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Questionnaire'
>;

type Props = {
  navigation: QuestionnaireScreenNavigationProp;
};

const QuestionnaireScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null,
  );
  const isFocused = useIsFocused();
  const name = useSelector((state: RootState) => state.user.name);
  useEffect(() => {
    if (!isFocused) {
      setCurrentQuestion(0);
      setTotalScore(0);
      setSelectedOptionIndex(null);
    }
  }, [isFocused]);

  const handleAnswer = (score: number, index: number) => {
    const newScore = totalScore + score;
    setTotalScore(newScore);
    setSelectedOptionIndex(index);

    if (currentQuestion < Questions.length - 1) {
      setSelectedOptionIndex(null);
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1000);
    } else {
      dispatch(updateScore(newScore));
      navigation.navigate('Result');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1a2330" barStyle="light-content" />
    <View style={styles.container}>
    <Text style={styles.welcome}>Hi {name}, please submit the questionnaire to calculate risk profile.</Text>
      <Text style={styles.question}>
        {Questions[currentQuestion].srno}. {Questions[currentQuestion].question}
      </Text>
      {Questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.card,
            selectedOptionIndex === index && styles.selectedCard,
          ]}
          onPress={() =>
            handleAnswer(Questions[currentQuestion].scores[index], index)
          }
          disabled={selectedOptionIndex !== null}>
          <Text
            style={[
              styles.optionText,
              selectedOptionIndex === index && styles.selectedOptionText,
            ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
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

export default QuestionnaireScreen;
