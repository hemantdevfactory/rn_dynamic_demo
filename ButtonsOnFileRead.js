import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import * as FileSystem from 'expo-file-system';

// This Component receives the number of buttons 
// to be created as input (in props)

export default class ButtonScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    state = {
        isFileRead: false
    };

    render() {

            console.log("Number of buttons " + this.props.number);
             
            array = [];
        
            for (i = 0; i < this.props.number; i++) {
                var str = "Button " + i;

                //console.log(str);

                var key = "key" + i;
                //console.log(key);
                ButtonElement = React.createElement(Button, { title: str, key: "button_" + i }, "str");
                textElement = React.createElement(Text, { key: "text_" + i }, "");
                array.push(ButtonElement);
                array.push(textElement);
            }
            ViewElement = React.createElement(View, { style: styles.container }, array);
            return (ViewElement);
        //}
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

/// Copy of the code
/*
console.log('Start downloading');
uri = FileSystem.documentDirectory + 'Text.js';
FileSystem.downloadAsync(
    "https://hshinde-bucket-src.s3.amazonaws.com/Text.js",
    uri
)
    .then(({ uri }) => {
        console.log(`Download complete`);
        return uri;
    })
    .catch(error => {
        console.error(`"${type}" not yet supported`);
    });
console.log('Finished downloading to ', uri);


readAsString = async (uri) => {
    let result = null;
    try {
        result = await FileSystem.readAsStringAsync(uri);
    } catch (e) {
        console.log(e);
    }
    return result;
}
var readtest = Promise.resolve(readAsString);
readtest.then(function (value) {
    console.log("hello file: " + value.size);
});


*/