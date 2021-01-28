import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Cards = props => {
    return(
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        elevation:20,
        backgroundColor:'white',
        padding:20,
        borderRadius:10
    }
});


export default Cards;