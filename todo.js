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
import {store} from './store';
import {util} from './util';

export default class Todo extends Component {
  constructor() {
    super();
    let todoList = store.todoList;
    let hashCode;
    hashCode = util.getHashCode('Do laundry');
    todoList.insert({id: hashCode, task: 'Do laundry', completed: false});
    hashCode = util.getHashCode('Pick groceries');
    todoList.insert({id: hashCode, task: 'Pick groceries', completed: false});
    hashCode = util.getHashCode('Submit project proposals');
    todoList.insert({id: hashCode, task: 'Submit project proposals', completed: false});
    this.state = {
      changed: false
    };
  }
  update() {
    this.setState({changed: true});
  }
  completeTodo(itemToComplete, index) {
    itemToComplete.completed = true;
    this.update();
  }
  removeTodo(itemToRemove) {
    store.todoList.remove(itemToRemove);
    this.update();
  }
  render() {
    let todos;
    if (store.todoList.get().length === 0) {
      todos = <View style={styles.emptyView}><Text style={styles.emptyViewText}>You haven't got to do anything!</Text></View>;
    } else {
      todos = <ScrollView style={styles.scrollView}>
        {store.todoList.get().map((todo, index) => {
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyViewText: {
    fontSize: 20
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
