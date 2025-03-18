import { Text, View, StyleSheet, Platform, SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import React, { useState  } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigate } from 'expo-router/build/global-state/routing';
import { Link, useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';



const DATA = [
  { id: "1", name: "Text" },
  { id: "2", name: "Textfield" },
  { id: "3", name: "Button" },
  { id: "4", name: "Image" },
  { id: "5", name: "Slider" },
  { id: "6", name: "Scrollview" },
  { id: "7", name: "Gridview" },
  { id: "8", name: "TopTabBar" },
  { id: "9", name: "Toast Message" },
  { id: "10", name: "Alert box" },
  { id: "11", name: "Date & Time Picker" },
  { id: "12", name: "Switch" },
  { id: "13", name: "UseReducer Hooks" },
  { id: "14", name: "Hooks" },
  { id: "15", name: "ImageBackground" },
  { id: "16", name: "SectionList" },
  { id: "17", name: "Login" },
  { id: "18", name: "TabBar Navigation" },
  { id: "19", name: "Drawer Navigation" },
  { id: "20", name: "home Screen" },
  { id: "21", name: "Modal Navigation" },
  { id: "22", name: "Api Call" },
];


const flatListProperty = () => {

  const router = useRouter();
  const Item = ({ title, id }) => (

    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar style='auto'></StatusBar>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => handleItemPress(title, id)}>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

  const handleItemPress = (title, id) => {
    console.log(`Clicked item value is: ${title}`);
    console.log(`Clicked item value is: ${id}`);
    if (id === "1") {
      router.push('/components/Label');
    } else if (id === "2") {
      router.push('/components/TextInput');
    } else if (id === "3") {
      router.push('/components/Button');
    } else if (id === "4") {
      router.push('/components/Task1');
    } else if (id === "5") {
      router.push('/components/Slider');
    } else if (id === "6") {
      router.push('/components/ScrolView');
    } else if (id === "7") {
      router.push('/components/GridView');
    } else if (id === "8") {
      router.push('/components/ToptabBar');
    } else if (id === "9") {

    } else if (id === "10") {

    } else if (id === "11") {
      router.push('/components/Picker');
    } else if (id === "12") {

    } else if (id === "13") {
      router.push('/components/Profile');
    } else if (id === "14") {
      router.push('/components/HooksExample');
    } else if (id === "15") {

    } else if (id === "16") {


    } else if (id === "17") {
      router.push('/Login-Screen');
    } else if (id === "18") {
      router.push('/(tab)');
    } else if (id === "19") {
      router.push('/(drawer)');
    } else if (id === "20") {
      
    } else if (id === "21") {
      router.push('/detail-Screen');
    }else if (id === "22") {
      router.push('/components/ApiCall/Home');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <Text style={styles.centerText}>Components List Example </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item id={item.id} title={item.name} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    flexDirection: "column",

  },
  title: {
    fontSize: 32,
  },
  centerText: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 24
  },
  deleteIcon: {
    flexDirection: "row",

  },
  iconSet: {
    justifyContent: 'space-between',
    alignItems: "flex-end",

  },
});

export default flatListProperty


