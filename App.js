import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const startGameHandler = (confirmedNumber) => {
    setUserNumber (confirmedNumber);
    setGuessRound(0);
  };

  const gameOverHandler = numOfRounds =>{
    setGuessRound(numOfRounds);
  }

  let content = <StartGameScreen onStartGame ={startGameHandler}/>

  if(userNumber && guessRound <= 0){
    content = <GameScreen userChoice={userNumber}
     onGameOver = {gameOverHandler}
    />
  }
  else if (guessRound > 0){
    content = <GameOverScreen/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }

});
