import React from "react";
import {TextInput, StyleSheet } from "react-native";

export default function NumberInput(props){

    return(
        <TextInput style={{...styles.input, ...props.style}}  />
    )

    function isNumber(value){
        return Number.isInteger(value)
    }

}

const styles = StyleSheet.create({
    input:{
        height:30,
        padding:5,
        borderBottomColor: 'grey',
        borderBottomWidth:1,
        marginTop:10,
    },
})

