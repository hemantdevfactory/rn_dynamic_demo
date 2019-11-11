import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity } from 'react-native';


// dangerouslySetInnerHTML is a React Method for
// generating views from Strings, doesn't work in 
// React Native

export default class DangerHTML extends React.Component {

  render() {
   str = '<img class="emojione" alt="🇬🇧" title=":flag_gb:" src="https://cdn.jsdelivr.net/emojione/assets/4.0/png/32/1f1ec-1f1e7.png"/>'
   return( <div dangerouslySetInnerHTML={{__html: str}}></div> )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20
  },
  textInput: {
    margin: 15,
    height: 30,
    width: 200,
    borderWidth: 1,
    color: 'green',
    fontSize: 20,
    backgroundColor: 'black'
  }
});
