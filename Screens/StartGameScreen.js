import React, {Component} from 'react';
import {
    View,
    Text, 
    StyleSheet, 
    TextInput, 
    Button, 
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import Cards from '../Components/Cards';
import NumberContainer from '../Components/NumberContainer'


class StartGameScreen extends Component {
    state = {
      enteredValue: false,
      confirmed: false
    } 
  
    // componentDidMount = () => {
    //   this.setState({enteredValue: "90" })
    //   this.confirmInputHandler()
    // }

    numberInputHandler = inputText =>{
        this.setState({ enteredValue: inputText.replace(/[^0-9]/g, '') })
    }; 

    resetInputHandler = () => {
        this.setState({
          enteredValue: false,
          confirmed: false,
          confirmedNumber: undefined
        })
    }

    confirmInputHandler = () => {
        const chosenNumber = parseInt(this.state.enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('invalid number', 'Number has to be a number b/w 1 and 99  ' )
            return;
        }
        this.setState({
          confirmed: true,
          enteredValue:false,
          confirmedNumber: this.state.enteredValue,
        })
        
        Keyboard.dismiss()
    };


    render = () => {
      console.log("call")
      return(
        <TouchableWithoutFeedback
            onPress = {() =>{
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New game </Text>
                <Cards style={ styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <TextInput style ={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        keyboardType="numeric" 
                        maxLength={2} 
                        onChangeText={this.numberInputHandler}
                        value ={this.state.enteredValue}

                    />
                    <View style ={ styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button
                                title="Reset"
                                onPress={this.resetInputHandler}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Button
                            style={styles.btn}
                            title="Confirm"
                            onPress={this.confirmInputHandler}
                            />
                        </View>
                    </View>
                </Cards>
                    <View>
                        {
                            this.state.confirmedNumber &&
                            <Cards style={styles.outputNumber}>
                                <Text>The chosen Number: </Text>
                                <NumberContainer>
                                    <Text style={styles.number}>{this.state.confirmedNumber}</Text>
                                </NumberContainer>
                                    
                                <View>
                                    <Button title="Start Game" onPress= {
                                        () => this.props.onStartGame(this.state.confirmedNumber)
                                    }/>
                                </View>
                            </Cards>
                        }
                    </View>
            </View>
        </TouchableWithoutFeedback>
      );
  }
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
        paddingHorizontal:10,
        borderRadius:5,
    },

    outputNumber:{
        marginTop:20,
        alignItems:'center'
    }
});

export default StartGameScreen;

