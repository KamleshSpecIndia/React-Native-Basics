import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import * as Progress from "react-native-progress";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router'


const SliderComponents = () => {
    const [value, setValue] = useState(50);
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 1 ? prev + 0.1 : 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                          <Icon name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.label}>Value: {value.toFixed(0)}</Text>
                    <Slider
                        style={{ width: 300, height: 40 }}
                        minimumValue={0}
                        maximumValue={1000}
                        step={1}
                        value={value}
                        onValueChange={(val) => setValue(val)}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="gray"
                        thumbTintColor="red"
                    />
                    <Text>Loading...</Text>
                    <Progress.Bar progress={progress} width={200} color='red' thickness={5} showsText />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

//bar
//Circle
//Pie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    backButton: {
        top:10,
        position: "absolute",
        left: 10,
        padding: 10,
        zIndex: 10,
      },
    

});

export default SliderComponents;
