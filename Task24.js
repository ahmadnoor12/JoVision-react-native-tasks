import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Functional child component using forwardRef
const MyFunctionPage = forwardRef((props, ref) => {
  const [childText, setChildText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setChildText(newText);
    },
  }));

  return (
    <View style={styles.childContainer}>
      <Text style={styles.childText}>{childText}</Text>
    </View>
  );
});

// Parent component
export default function App() {
  const [inputText, setInputText] = useState('');
  const childRef = useRef();

  const handleInputChange = (text) => {
    setInputText(text);
    if (childRef.current) {
      childRef.current.updateText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={inputText}
        onChangeText={handleInputChange}
      />
      <MyFunctionPage ref={childRef} />
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
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
  },
  childText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
