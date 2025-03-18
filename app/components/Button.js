import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity, Alert, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CapsuleButton from './capsuleShape';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const buttonComponentsList = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const saveSelectedValue = (value) => {
    console.log("Selected Button is:", value)
    setSelectedValue(value); // Update state dynamically when a button is clicked

  };


  const clickLeftButtonPressed = () => {
    console.log('Left button Pressed')
  }
  const clickrightLongPressPressed = () => {
    console.log('Long button Pressed')
  }

  const handleSelection = (value) => {
    console.log("Selected:", value); // Handle selection (optional)
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Button title="Simple Button"
            onPress={() => Alert.alert('Simple Button pressed')}
          ></Button>
          <View style={{ paddingHorizontal: 10 }} >
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text>Touchabel opacity Buttton : {count}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fixToText}>
            <TouchableOpacity style={{ backgroundColor: '#4CAF50' }}><Text style={styles.textProperty} onPress={clickLeftButtonPressed}>Left Button</Text></TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#4CAF50', borderTopRightRadius: 10, borderBottomRightRadius: 10 }} ><Text style={styles.textProperty} onLongPress={clickrightLongPressPressed} delayLongPress={1000} >right Button</Text></TouchableOpacity>
          </View>
          <View>
            <Pressable style={styles.presseabel} onPress={onPress}>
              <Text>I'm pressable! : {count}</Text>


            </Pressable>
            <CapsuleButton onSelect={saveSelectedValue} />

            {selectedValue ? (
              <Text style={styles.selectedText}>You selected: {selectedValue}</Text>
            ) : null}

          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,

  },
  button: {
    //backgroundColor:'black',
    color: 'white',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10

  },
  textProperty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  presseabel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  }, 
  backButton: {
    position: "absolute",
    left: 10,
    padding: 10,
    zIndex: 10,
  },






});
export default buttonComponentsList;