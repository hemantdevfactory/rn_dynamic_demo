import React from 'react';
import DomParser from "dom-parser";
import { StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity } from 'react-native';
// For acorn jsx parser
import acorn from "acorn";
import jsx from "acorn-jsx";



export default class EvalElement extends React.Component {

    render() {
        /* 
        Following code shows that creating components inside eval doesn't work.
        */
        array = [];
        eval("TextElement2 = <Text>value<Text/>; array.push(TextElement2);");
               
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
