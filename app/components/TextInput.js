import { Text, View, StyleSheet, Platform, SafeAreaView, TextInput, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';



const textFieldComponents = () => {
  const [text, setText] = useState([]);
  const [name, changeValue] = useState("")
  const [materialtext, setMaterialText] = useState([]);

  const router = useRouter();

  return (
    <SafeAreaView style={styles.fullScreenView}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.view}  >
        <TextInput style={styles.inputText}
          multiline={true}
          numberOfLines={2}
          placeholder="Enter Email"
          placeholderTextColor="white"
          keyboardType="email-address"
          contextMenuHidden={false}
        ></TextInput>
        <TextInput style={styles.passwordSceen}
          placeholder="Enter Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          keyboardType="default"
          caretHidden={true}
        ></TextInput>
        <TextInput placeholder="Enter text" value={text} onChangeText={setText} style={styles.text}></TextInput>
        <TextInput style={styles.underlinedText}>Underlined Text</TextInput>

        <TextInput style={styles.underlinedText} value={name} onChangeText={changeValue} placeholder='Enter name '></TextInput>
        <Text>  Value change of name is {name}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreenView: {
    flex: 1,
    backgroundColor: "white",
  },
  view: {
    flex: 1,
    gap: 20,
    paddingTop:70
  },
  inputText: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    writingDirection: "auto",
  },
  passwordSceen: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    writingDirection: "auto",


  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 15,
  },
  text: {
    height: 40,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 15,
  },
  underlinedText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2, // Creates the underline
    borderBottomColor: 'blue', // Underline color
    paddingBottom: 5, // Adds some space between text and underline
    marginHorizontal: 15,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 10,
  },

});

export default textFieldComponents

const handleLongPress = () => {
  // Mimic context menu option to set "Hello World"
  Alert.alert(
    "Custom Context Menu",
    "Set text to 'Hello World'?",
    [
      { text: "Cancel", style: "cancel" },
      { text: "Set Text", onPress: () => setText("Hello World") }
    ]
  );
};