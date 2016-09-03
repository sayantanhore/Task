import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';
import {store} from './store';
import {util} from './util';

export default class AddTodo extends Component {
  constructor() {
    super();
  }
  updateTodoList(event) {
    let hashCode = util.getHashCode(event.nativeEvent.text);
    store.todoList.insert({id: hashCode, task: event.nativeEvent.text, completed: false});
    this.props.newTodoAdded();
    this.refs._textInput.clear();
  }
  render() {
    return (
      <TextInput
        ref="_textInput"
        placeholder="Add a todo"
        underlineColorAndroid={'transparent'}
        style={styles.addTodo}
        blurOnSubmit={true}
        onSubmitEditing={(event) => {this.updateTodoList(event)}}/>
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
