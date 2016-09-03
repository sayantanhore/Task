/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import moment from 'moment';
import Today from './today';
import Todo from './todo';
import AddTodo from './addTodo';

class Task extends Component {
  updateTodoList() {
    console.log('Todoooooooo', this.refs.todoList.update);
    this.refs.todoList.update();
  }
  componentDidMount() {

  }
  render() {
    return (
      <View style={styles.container}>
        <Today></Today>
        <Todo ref="todoList"></Todo>
        <AddTodo newTodoAdded={this.updateTodoList.bind(this)}></AddTodo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('Task', () => Task);
