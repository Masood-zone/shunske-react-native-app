import { View, Text, StyleSheet } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coffee</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
