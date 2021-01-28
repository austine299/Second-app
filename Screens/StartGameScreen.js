import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import Cards from '../Components/Cards';


const StartGameScreen = props => {


    const [ enteredValue, setEnteredValue ] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState();

    const numberInputHandler = inputText =>{
        setEnteredValue (inputText.replace(/[^0-9]/g, ''));
    }; 

    const resetInputHandler = () =>{
        setEnteredValue(''); 
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
        setConfirmed(true);
        setEnteredValue(chosenNumber);
        setSelectedNumber('');
    };

    let confirmedOutPut;

    if (confirmed){
        confirmedOutPut= <Text> Chosen Number: {selectedNumber}</Text>
    }
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New game </Text>
            <Cards style={ styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput style ={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType="numeric" 
                    maxLength={2} 
                    onChangeText={numberInputHandler}
                    value ={enteredValue}

                />
                <View style ={ styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="Reset" color="red" onPress={resetInputHandler}/>
                    </View>
                    <View style={styles.btn}>
                        <Button style={styles.btn}  title="Confirm" onPress={confirmInputHandler}/>
                    </View>
                </View>
            </Cards>
            {confirmedOutPut}
        </View>
    );
};

const styles =StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        paddingHorizontal:15
    },
    title:{
        fontSize:20,
        marginVertical:10
    }, 
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },

    btn:{
        width:'40%'
    },
    input:{
        width:'30%',
        textAlign:'center',
        height:40,
        borderColor:'grey',
        marginVertical:10,
        elevation:4,
        paddingHorizontal:11,
        borderRadius:5,
    }

});

export default StartGameScreen;