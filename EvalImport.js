import React from 'react';
import DomParser from "dom-parser";
import { StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity } from 'react-native';
// For acorn jsx parser
import acorn from "acorn";
import jsx from "acorn-jsx";



export default class EvalImport extends React.Component {
    /* 
        Following code shows that React.createElement doesn't work inside eval.
        And we can't import React inside eval to resolve errors appearing due to createElement
    */
    render() {
        array = [];
        eval('import React from "react";TextElement = React.createElement(Text, {key: "tx1"}, "Welcome to react world");array.push(TextElement); ');
        
               
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
