import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import NumberInput from "../components/NumberInput";
const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <NumberInput style={styles.input}/> 
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={"Reset"} color={Colors.accent} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title={"Confirm"} color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
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
  input:{
      width:50
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
