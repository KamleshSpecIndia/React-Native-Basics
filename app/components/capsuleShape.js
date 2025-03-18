import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CapsuleButton = () => {
  
  const [selected, setSelected] = useState(null); // 'Signin' or 'Singup'

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.capsule}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === "accept" && styles.selectedButton,
            { borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }, // Round left
          ]}
          onPress={() => setSelected("accept")}
        >
          <Text style={[styles.text, selected === "accept" && styles.selectedText]}>Accept</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selected === "decline" && styles.selectedButton,
            { borderTopRightRadius: 25, borderBottomRightRadius: 25 }, // Round right
          ]}
          onPress={() => setSelected("decline")}
        >
          <Text style={[styles.text, selected === "decline" && styles.selectedText]}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft:20,
    paddingRight:20,
    height:'200'
  },
  capsule: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "#ddd",
    overflow: "hidden", // Ensures rounded corners
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  selectedText: {
    color: "white", // Change text color when selected
  },
});

export default CapsuleButton;