import React from "react";
import {TextInput, StyleSheet } from "react-native";

export default function NumberInput(props){

    return(
        <TextInput maxLength={4} style={{...styles.input, ...props.style}}  onChangeText={text => onChangeText(text)}/>
    )

    function isNumber(value){
        return Number.isInteger(value)
    }

    function onChangeText(value){
        console.log(value)
    }

}

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor: 'grey',
        borderBottomWidth:1,
        marginTop:10,
    },
})

