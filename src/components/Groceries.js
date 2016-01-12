const React = require('react-native')
const {
  StyleSheet,
  ListView,
  NetInfo,
  Text,
  TextInput,
  View
} = React

import Item  from './Item';

const Groceries = React.createClass({
  getInitialState: function() {
    return {
      newItem: ''
    }
  },

  render: function() {
    return (
      <Text style={styles.container}>
        asdf
      </Text>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F6F6F6'
  },
  newItem: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 20
  },
  offline: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
})

module.exports = Groceries
