import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title={"Reset"}  onPress={()=>{}}/>
                    <Button title={"Confirm"}  onPress={()=>{}}/>
                </View>
            </Card>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        width:'100%',
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent: "center",
        justifyContent:'space-between',
        paddingHorizontal:15,
        elevation:5,
        borderRadius:20,
    }
})

export default StartGameScreen;