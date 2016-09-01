import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

export default class AddTodo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <TextInput placeholder="Add a todo" underlineColorAndroid={'transparent'} style={styles.addTodo}/>
    );
  }
}

const styles = StyleSheet.create({
  addTodo: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});
