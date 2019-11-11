import React from 'react';
import { Loader, StyleSheet, Text, View, Button, FlatList, Menu, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import * as FileSystem from 'expo-file-system';
import ButtonScreen from './ButtonScreen';
import StringToJSX from './StringToJSX';
import DangerHTML from './DangerHTML';
import EvalComponent from './EvalComponent';
import EvalCreateComponent from './EvalCreateComponent';
import EvalImport from './EvalImport';
import EvalAssignObjects from './EvalAssignObjects';
import ButtonsOnFileRead from './ButtonsOnFileRead';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this._createButtonsOnFileRead = this._createButtonsOnFileRead.bind(this);
    this._afterRead = this._afterRead.bind(this);
    this.state = {
      content: <View style={styles.container}>
        <Button title="Buttons" onPress={this._createButtons} />
        <Text></Text>
        <Button title="Buttons On File Read" onPress={this._createButtonsOnFileRead} />
        <Text></Text>
        <Button title="Danger HTML" onPress={this._useDangerHTML} />
        <Text></Text>
        <Button title="eval component" onPress={this._useEvalComponents} />
        <Text></Text>
        <Button title="eval createComponent" onPress={this._useEvalCreateComponents} />
        <Text></Text>
        <Button title="eval import" onPress={this._useEvalImport} />
        <Text></Text>
        <Button title="Assign Objects in eval" onPress={this._useEvalAssignObjects} />

      </View>,
      loading: true
    };
  }

  _afterRead = (num) => {
    this.setState({ content: <ButtonsOnFileRead number={num} /> });
  }
  _createButtonsOnFileRead = () => {
    fname = 'number.txt'
    async function fetchImport(url) {
      const res = await fetch(url);
      const source = await res.text();
      console.log("File content" + source);
      
      return source;
    }
    url = "https://hshinde-bucket-src.s3.amazonaws.com/" + fname;
    fetchImport(url).
      then((text) => {
        console.log("Object list", text);
        this._afterRead(text);
      });




    var array = [];
    var loaderComponent = <Text key="tx1"> Loading content...</Text>;
    array.push(loaderComponent);
    var loaderView = React.createElement(View, { style: styles.container }, array);;


    this.setState({ content: loaderView });
    //this.setState({ content: <StringToJSX/> });
    // Show loader until file read




  };

  _createButtons = () => {
    this.setState({ content: <ButtonScreen /> });
    //return (<ButtonScreen />);
  };

  _useDangerHTML = () => {
    this.setState({ content: <DangerHTML /> });
    //return (<DangerHTML />);
  };

  _useEvalComponents = () => {
    this.setState({ content: <EvalComponent /> });
    //return (<EvalComponent />);
  };

  _useEvalCreateComponents = () => {
    this.setState({ content: <EvalCreateComponent /> });
    //return (<EvalCreateComponent />);
  };

  _useEvalImport = () => {
    this.setState({ content: <EvalImport /> });
    //return (<EvalImport />);
  };

  _useEvalAssignObjects = () => {
    this.setState({ content: <EvalAssignObjects /> });
    //return (<EvalImport />);
  };



  render() {
    //console.log("Output ", this.state.content);

    return (
      this.state.content
    );
  }
}
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
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
