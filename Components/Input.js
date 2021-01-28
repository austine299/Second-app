import React, {useState} from 'react';
import {TextInput, StyleSheet } from 'react-native';

const Input = props =>{

    return(
        <TextInput style ={{...styles.input, ...props.style}} 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false} 
            keyboardType="number-pad" 
            maxLength={2} 

        />
    );
};

const styles = StyleSheet.create({
    input:{
        height:40,
        borderColor:'grey',
        marginVertical:10,
        elevation:4,
        paddingHorizontal:10,
        borderRadius:5,
    }
});

export default Input;