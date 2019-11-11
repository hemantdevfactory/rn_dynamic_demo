import React from 'react';
import DomParser from "dom-parser";
import { StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity } from 'react-native';
// For acorn jsx parser
import acorn from "acorn";
import jsx from "acorn-jsx";



export default class EvalAssignObjects extends React.Component {

    render() {
        /* 
        Begin Demo: Code to generate JSX dynamically from text. 
        Following code generates elements outside and adds objects to an array inside eval.
        */
       
        array = [];
        TextElement = React.createElement(Text, {key: "tx1"}, "Text Object 1 pushed from eval");
        TextElement2 = React.createElement(Text, {key: "tx2"}, "Text Object 2 pushed from eval");
                
        eval("array.push(TextElement);array.push(TextElement2);");
        
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
