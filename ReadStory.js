import React from 'react';
import { Text, View,  StyleSheet } from 'react-native';
//import * as Permissions from 'expo-permissions';

export default class ReadStory extends React.Component {
  render(){
    return(
     <View style={styles.container}>
      <Text>READ STORY</Text>   
     </View>   
    )  
  }  
}

const styles = StyleSheet.create({
    container:  {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
     }, 
    })  