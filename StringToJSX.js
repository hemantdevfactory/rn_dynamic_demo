import React from 'react';
import DomParser from "dom-parser";
import { StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity } from 'react-native';
// For acorn jsx parser
import acorn from "acorn";
import jsx from "acorn-jsx";



export default class StringToJSX extends React.Component {

    render() {
        /* 
        Begin Demo 1 : Code to generate JSX dynamically from text. 
        Following code generates elements
        */
        /**/
        TextElement = React.createElement(Text, {key: "tx1"}, "Welcome to react world");
        TextElement2 = React.createElement(Text, {key: "tx2"}, "Welcome to react world2");
        
        
        //ViewElement = React.createElement(View, { style: styles.container }, [TextElement,TextElement2] );

        // Controlling react components through an array
        array = [];
        eval("array.push(TextElement);array.push(TextElement2);");
        //array.push(TextElement2);
        ViewElement = React.createElement(View, { style: styles.container }, array );
        

        //console.log("Text element", ViewElement);
        //return (ViewElement);

        /* End Demo 1 */

        /* Begin Demo 2
        Creating multiple elements from a string using acorn
        https://www.npmjs.com/package/acorn-jsx
        */

        /* End Demo 2 */

        /*
        output = acorn.Parser.extend(jsx()).parse("<View></View>");
        console.log(output);
        return (output);
        */
        /* 
        Begin Demo 3 : Creating multiple elements from a string using react-jsx-parser
        https://www.npmjs.com/package/react-jsx-parser
        */
        /* End Demo 3 */
        /* 
        Begin Demo 4 : Load Javascript from a file dynamically
        */
        /* End Demo 3 */
        /* End Demo 3 */

        /* 
        Begin Demo 4 : use fetch and eval
        */
        async function fetchImport(url) {
            const res = await fetch(url);
            const source = await res.text();

            let exports = {};
            const module = { exports };
            const require = id => {
                if (!(id in externals)) throw new Error(`Module not found: ${id}`);
                return externals[id];
            };
            console.log("File content" + source);
            var tmpText = "";
            eval("tmpText = 'tx3' ; console.log('Text in eval', TextElement2.key);");
            console.log(tmpText);
            return source;
        }
        url = "https://hshinde-bucket-src.s3.amazonaws.com/TomTom.js";
        fetchImport(url).
            then(( objects ) => {
                console.log("Object list", objects);
                return (ViewElement);
            });
        return (ViewElement);
        /* End Demo 4 */

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
