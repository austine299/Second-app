import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import Cards from '../Components/Cards';


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
        this.seState({
          enteredValue: false,
          confirmed: false,
          confiremedNumber: undefined
        })
    }

    confirmInputHandler = () => {
        const chosenNumber = parseInt(this.state.enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
        this.setState({
          confirmed: true,
          confiremedNumber: this.state.enteredValue
        })
    };


    render = () => {
      console.log("call")
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
              {
                this.state.confiremedNumber &&
                (<Text>{this.state.confiremedNumber}</Text>)
              }
          </View>
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
    }

});

export default StartGameScreen;

