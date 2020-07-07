import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import styles from "./startGameScreenCss";
import Card from "../components/Card";
import Colors from "../constants/colors";
import NumberInput from "../components/NumberInput";

const StartGameScreen = (props) => {
  // State
  const [numValue, setNumValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [staticValue, setStaticValue] = useState(0);

  // HTML
  return (
    // enables the numberpad to go away when user clicks a blank space
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <NumberInput
            value={numValue}
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={"Reset"}
                color={Colors.accent}
                onPress={() => resetValue()}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"Confirm"}
                color={Colors.primary}
                onPress={() => {
                  confirmInputHandler();
                }}
              />
            </View>
          </View>
        </Card>
        {confirmed ? confirmedView() : null}
      </View>
    </TouchableWithoutFeedback>
  );

  // Helper functions
  function confirmedView() {
    return (
      <Card style={{ ...styles.inputContainer, ...styles.guessContainer}}>
        <Text>You entered</Text>
        <Text style={styles.guessedNumber}>{staticValue}</Text>
      </Card>
    );
  }
  function resetValue() {
    setNumValue("");
  }
  function confirmInputHandler() {
    if (numValue.length > 1 && numValue[0] == "0") {
      setConfirmed(false);
      Alert.alert(
        "STAAP!!",
        `Don't enter ${numValue}`,
        [
          {
            text: "Reset Value",
            onPress: () => [resetValue(), setConfirmed(false)],
          },
        ],
        { cancelable: false }
      );
      return;
    }
    if (Number.isInteger(parseInt(numValue))) {
      setConfirmed(true);
      setStaticValue(numValue);
    } else {
      Alert.alert("Please Enter A Whole Number!");
      setConfirmed(false);
      return;
    }
  }
  function onChangeText(value) {
    setNumValue(value.replace(/[^0-9]/g, ""));
  }
  function isNumber(value) {
    if (value === "") return false;

    for (let x of value) {
      if (x === "." || x === " ") {
        return false;
      }
    }
    return Number.isInteger(parseInt(value));
  }
};


export default StartGameScreen;
