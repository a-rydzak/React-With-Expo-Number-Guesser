import React , {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const [gameNumber, setgameNumber] = useState(generateRandomBetween(0,101));
  const [dataLoaded, setDataLoaded] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [allGuesses, setAllGuesses] = useState([])
  const [guessRounds, setGuessRounds] = useState(0)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setgameNumber(generateRandomBetween(0,101));
    setGameOver(false)
  };

  let gameContent = (<StartGameScreen allGuesses={allGuesses} setGameOver={setGameOver} setAllGuesses={setAllGuesses} winningNumber={gameNumber} resetGameNumber={setgameNumber}/>);
  let overContent = (
    <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={gameNumber}
      onRestart={configureNewGameHandler}
    />
  );
  return (
    <View style={styles.container}>
      <Header title='Hello Motto 2'/>
      {gameOver===true? overContent: gameContent}
    </View>
  );
  }

 
  function generateRandomBetween(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    return rndNum
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
