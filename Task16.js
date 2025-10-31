import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [showName, setShowName] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={showName ? "Hide" : "Show"}
        onPress={() => setShowName(!showName)}
      />
      
      {showName && (
        <Text style={styles.nameText}>Ahmad Hayajneh</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  nameText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;


