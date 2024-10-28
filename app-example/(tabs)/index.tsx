import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const App = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ padding: 10 }}>
      {/* Text input */}
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
      {/* Button */}
      <Button
        onPress={() => {
          setText("");
        }}
        title="Reset"
      />
    </View>
  );
};

export default App;
