import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Class component
class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.classContainer}>
        <Text style={styles.classText}>Hello from MyClassPage!</Text>
      </View>
    );
  }
}

// Main App component
export default class App extends Component {
  state = {
    showClass: false,
  };

  toggleClass = () => {
    this.setState({ showClass: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show" onPress={this.toggleClass} />
        {this.state.showClass && <MyClassPage />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  classText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
