import { View, Text,Button,Modal,StyleSheet } from 'react-native'
import React, { useState } from "react";
import { useRouter } from "expo-router";


const detailScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [popupmodalVisible, setpopUpModalVisible] = useState(false);

  return (
    <View>
     <Button title="Open Modal" onPress={() => setModalVisible(true)} />
     <Button title="Open popUp Modal" onPress={() => setpopUpModalVisible(true)} />

     <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000" }}>
          <Text style={{ color: "white" }}>Second Screen (Modal)</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Modal visible={popupmodalVisible} animationType="fade" transparent={true}>
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <Text style={styles.text}>This is a Popup</Text>
            <Button title="Close" onPress={() => setpopUpModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Darkens background but still shows content
  },
  popup: {
    width:"70%",
    height:"200",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default detailScreen