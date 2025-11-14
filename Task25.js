import React, { Component, createRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Class child component
class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childText: '',
    };
  }

  // Method to update the text
  updateText = (newText) => {
    this.setState({ childText: newText });
  };

  render() {
    return (
      <View style={styles.childContainer}>
        <Text style={styles.childText}>{this.state.childText}</Text>
      </View>
    );
  }
}

// Parent component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.childRef = createRef();
    this.state = {
      inputText: '',
    };
  }

  handleInputChange = (text) => {
    this.setState({ inputText: text });
    if (this.childRef.current) {
      this.childRef.current.updateText(text);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={this.state.inputText}
          onChangeText={this.handleInputChange}
        />
        <MyClassPage ref={this.childRef} />
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
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  childContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fce4ec',
    borderRadius: 5,
  },
  childText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
