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
import Card from "../components/Card";
import Colors from "../constants/colors";
import NumberInput from "../components/NumberInput";

const StartGameScreen = (props) => {
  const [numValue, setNumValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [staticValue, setStaticValue] = useState(0);
  return (
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

  function confirmedView() {
    return <Card style={{...styles.inputContainer,marginTop:20}}>
              <Text>You entered</Text>
              <Text>{staticValue}</Text>
           </Card>;
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
const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    elevation: 5,
    borderRadius: 20,
  },
  input: {
    textAlign: "center",
    width: 50,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
