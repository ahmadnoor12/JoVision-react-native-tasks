import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Class child component
class MyClassPage extends Component {
  render() {
    const { onTextChange } = this.props;
    return (
      <View style={styles.childContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={onTextChange}
        />
      </View>
    );
  }
}

// Parent component
export default class App extends Component {
  state = {
    parentText: '',
  };

  handleTextChange = (text) => {
    this.setState({ parentText: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.parentText}>Parent Text: {this.state.parentText}</Text>
        <MyClassPage onTextChange={this.handleTextChange} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  parentText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  childContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
