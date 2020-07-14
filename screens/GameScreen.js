import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './startGameScreenCss';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';

export default function GameScreen(props){

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 101, props.userChoice))

    useEffect(()=>{
        const updatedGuesses = [...props.allGuesses]
        updatedGuesses.push(currentGuess)
        props.setAllGuesses(updatedGuesses)
    },[props.userChoice])
    
    return(
        <View style={styles.screen}>
            <Card style={{ ...styles.inputContainer, ...styles.guessContainer}}>
            <Text style={DefaultStyles.title}>Opponents Guess</Text>
            <Text style={styles.guessedNumber}>{currentGuess}</Text>
            {props.winningNumber == currentGuess? <Text>Computer Won!!</Text>: null}
            </Card>
        </View>
    )


    function generateRandomBetween(min, max, exclude){
        min = Math.ceil(min);
        max = Math.ceil(max);
        const rndNum = Math.floor(Math.random() * (max-min)) + min;
        if(rndNum === exclude){
            return generateRandomBetween(min, max, exclude)
        }
        else if(props.allGuesses.includes(rndNum)){
            return generateRandomBetween(min, max, exclude)
        }
        else{
            return rndNum
        }
    }
}

