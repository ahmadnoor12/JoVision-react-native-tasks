import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={toggleVisibility}
      />
      {isVisible && <Text style={styles.nameText}>Ahmad Hayajneh</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default App;
