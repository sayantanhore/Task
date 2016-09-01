import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment';

export default class Today extends Component {
  constructor () {
    super();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let now = moment();
    this.state = {
      date: now.date(),
      month: months[now.month()]
    }
  }
  render() {
    return (
      <View style={[{flex: 1, flexDirection: 'column'}, styles.dateView]}>
        <Text style={styles.date}>{this.state.date}</Text>
        <Text>{this.state.month}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dateView: {
    margin: 25
  },
  date: {
    color: 'steelblue',
    fontSize: 30
  }
});
