import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Functional child component
const MyFunctionPage = ({ onTextChange }) => {
  return (
    <View style={styles.childContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={onTextChange}
      />
    </View>
  );
};

// Parent component
export default function App() {
  const [parentText, setParentText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.parentText}>Parent Text: {parentText}</Text>
      <MyFunctionPage onTextChange={setParentText} />
    </View>
  );
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
