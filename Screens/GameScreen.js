import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert
} from 'react-native';

import NumberContainer from '../Components/NumberContainer';
import Cards from '../Components/Cards';

const generateRandomBetween =(min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween (min, max, exclude);
    }else{ 
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState (
        generateRandomBetween(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    if(currentGuess === userChoice){
        onGameOver(rounds)
    }
    const nextGameHandler = direction =>{
        if((direction === 'lower' && currentGuess < props.userChoice) ||
         (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('don\'t lie!', 'you know that this is wrong...', [{
                text: 'Sorry!', style: 'Cancel'
            }])
            return;
        }
        
        if(direction === 'lower'){
            currentHigh.current =currentGuess;
        }
        else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current, 
            currentHigh.current, 
            currentGuess
        );
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return  (
        <View style= {styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Cards style={styles.btnContainer}>
                <Button title="LOWER" onPress = {nextGameHandler.bind(this, 'lower')}/>
                <Button title="GREATER" onPress = {nextGameHandler.bind(this, 'greater')}/>
            </Cards>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        padding:20,
        alignItems:'center'
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around', 
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
});

export default GameScreen;