import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import NumberContainer from '../Components/NumberContainer';
import Cards from '../Components/Cards';

const generateRandomBetween =(min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween =(min, max, exclude);
    }else{
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );
    return  (
        <View style= {styles.screen}>
            <Text>
                Opponent's Guess
                <NumberContainer>{currentGuess}</NumberContainer>
                <Cards style={styles.btnContainer}>
                    <Button title="LOWER" onPress = {() => {}}/>
                    <Button title="GREATER" onPress = {() => {}}/>
                </Cards>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        padding:10,
        alignItems:'center'
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around', 
        marginTop:20,
        maxWidth:'80%'
    }
});

export default GameScreen;