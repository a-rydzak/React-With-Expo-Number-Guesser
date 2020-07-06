import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../constants/colors';
// This would be a section for hooks/side effects
// export default function Header(props){}

// Functional components won't take into account side effects
const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
      );
}

// style here in react native is display:'flex naturally'
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingTop:36,
        backgroundColor: Colors.primary,
        justifyContent:'center',
        width:'100%',
        height:90,
    },
    headerTitle:{
        color:'black',
        fontSize:18
    }
})

export default Header;