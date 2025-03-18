import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BackButton from "./BackButton";

const DATA = [
    {
        id: "1",
        title: "Mountain View",
        image: "https://source.unsplash.com/200x200/?mountain",
        description: "A beautiful mountain range.",
    },
    {
        id: "2",
        title: "City Lights",
        image: "https://source.unsplash.com/200x200/?city",
        description: "The night view of a city skyline.",
    },
    {
        id: "3",
        title: "Beach Paradise",
        image: "https://source.unsplash.com/200x200/?beach",
        description: "Crystal clear water and golden sand.",
    },
    {
        id: "4",
        title: "Forest Adventure",
        image: "https://source.unsplash.com/200x200/?forest",
        description: "A deep green forest full of life.",
    },
];

const CardView = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style = { { marginLeft:10}}>
                <BackButton ></BackButton> 
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    card: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        margin: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 2, height: 4 },
        elevation: 5, // Shadow for Android
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: "gray",
        textAlign: "center",
    },
});

export default CardView;




