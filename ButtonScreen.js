import React from 'react';
import { BackHandler, StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity } from 'react-native';


// code to create a fixed set of buttons

export default class ButtonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  render() {
    //str = "Button";
    array = [];
    
    for(i=0; i<3; i++) {
      var str = "Button " + i;
      
      console.log(str);

      var key = "key" + i;
      console.log(key);
      ButtonElement = React.createElement(Button, {title: str, key: "button_" + i }, "str");
      textElement = React.createElement(Text, {key: "text_" + i}, "");  
      array.push(ButtonElement);
      array.push(textElement);
    }
    ViewElement = React.createElement(View, { style: styles.container }, array );
    return (ViewElement);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
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
