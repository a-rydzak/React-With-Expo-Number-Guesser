import React from "react";
import {TextInput, StyleSheet } from "react-native";

export default function NumberInput(props){

    return(
        <TextInput  maxLength={3} {...props} keyboardType="number-pad" placeholder="0-100" style={{...styles.input, ...props.style}}  />
    )

} 

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor: 'grey',
        borderBottomWidth:1,
        marginTop:10,
    },
})
