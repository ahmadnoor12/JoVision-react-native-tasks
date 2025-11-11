import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Functional component with useEffect lifecycle simulation
const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={styles.functionContainer}>
      <Text style={styles.functionText}>Hello from MyFunctionPage!</Text>
    </View>
  );
};

// Main App component
export default function App() {
  const [showFunction, setShowFunction] = useState(false);

  const toggleFunction = () => {
    setShowFunction(!showFunction);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleFunction} />
      {showFunction && <MyFunctionPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  functionContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
  },
  functionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
