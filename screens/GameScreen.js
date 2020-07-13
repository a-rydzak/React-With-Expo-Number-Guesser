import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './startGameScreenCss';
import Card from '../components/Card';

export default function GameScreen(props){

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 101, props.userChoice))

    
    return(
        <View style={styles.screen}>
            <Card style={{ ...styles.inputContainer, ...styles.guessContainer}}>
            <Text>Opponents Guess</Text>
            <Text style={styles.guessedNumber}>{currentGuess}</Text>
            </Card>
        </View>
    )

    function generateRandomBetween(min, max, exclude){
        min = Math.ceil(min);
        max = Math.ceil(max);
        const rndNum = Math.floor(Math.random() * (max-min)) + min;
        if(rndNum === exclude){
            return generateRandomBetween(min, max, exclude)
        }else{
            return rndNum
        }
    }
}

