import {StyleSheet} from "react-native";
import Colors from "../constants/colors";
// CSS
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
    guessContainer:{
      maxWidth:'50%',
      borderColor: 'white',
      borderWidth:2,
      padding: 10,
      borderRadius:10,
      marginTop: 10,
    },
    guessedNumber:{
      marginTop:10,
      padding:8,
      textAlign: 'center',
      fontSize:25,
      borderRadius:5,
      width:50,
      height:50,
      borderWidth:2,
      color:Colors.accent,
      borderColor: Colors.accent,
    },
  });

export default styles;