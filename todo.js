import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {task: 'Do laundry', completed: false},
        {task: 'Pick groceries', completed: false},
        {task: 'Submit project proposals', false}
      ]
    };
  }
  completeTodo(itemToComplete, index) {
    itemToComplete.completed = true;
    this.state.todoList.splice(index, 1, itemToComplete);
    let todoListChanged = this.state.todoList;
    this.setState({todoList: todoListChanged});
  }
  removeTodo(itemToRemove) {
    let todoListChanged = this.state.todoList.filter((todo) => {
      if (todo.task !== itemToRemove.task) {
        return true;
      }
    });
    this.setState({todoList: todoListChanged});
  }
  render() {
    let todos;
    if (this.state.todoList.length === 0) {
      todos = <View style={styles.emptyView}><Text>You haven't got to do anything!</Text></View>;
    } else {
      todos = <ScrollView style={styles.scrollView}>
        {this.state.todoList.map((todo, index) => {
          return (
            <View style={styles.todo} key={index}>
              <TouchableOpacity onPress={this.completeTodo.bind(this, todo, index)}>
                <Image style={todo.completed ? styles.iconCompleted : styles.icon} source={require('./icons/accept.png')} />
              </TouchableOpacity>
              <Text style={todo.completed ? styles.todoTextCompleted : styles.todoText}>{todo.task}</Text>
              <TouchableOpacity onPress={this.removeTodo.bind(this, todo)}>
                <Image style={styles.icon} source={require('./icons/delete.png')}/>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    }
    return (
      todos
    );
  }
}

const styles = StyleSheet.create({
  emptyView: {
    flex: 8,
    textAlign: 'center'
  },
  scrollView: {
    flex: 8,
    backgroundColor: '#f8f8ff'
  },
  todo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: '#f5f5f5'
  },
  todoText: {
    fontSize: 25
  },
  todoTextCompleted: {
    fontSize: 25,
    textDecorationLine: 'line-through'
  },
  icon: {
    width:20,
    height: 20,
    marginLeft: 10,
    marginRight: 10
  },
  iconCompleted: {
    width:20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    opacity: 0
  }
});
