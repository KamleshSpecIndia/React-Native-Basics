import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { getApiData } from './apiService';

const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Replace with your API key


const Task1 = () => {
    const [cityname, setweather] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [temperature, setTemperature] = useState(null);

    const getWeather = async () => {
        console.log('Enter city name', cityname)
        if (cityname) {
            fetchWeather()
        }
    };

    const fetchWeather = async () => {

        setLoading(true);
        const result = await getApiData(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&APPID=e0fcc923acdab8985fd01244707146f7`);
        if (result.error) {
            console.log('error is', result.error)
            setError(result.error);
        } else {
            const tempKelvin = result.list[0]?.main?.temp;
            const tempCelsius = (tempKelvin - 273.15).toFixed(2);
            setTemperature(tempCelsius)
            
        }
        setLoading(false);

    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Weather App </Text>
                    <TextInput
                        placeholder='Enter City'
                        style={styles.textinput}
                        value={cityname}
                        onChangeText={setweather}
                    ></TextInput>
                    <Text style={styles.subtitle}>🌡️ Temperature in {cityname || "" }: {temperature || "0"}°C  </Text>
    
                    <View style={styles.centerView}>
                        <TouchableOpacity style={styles.button} onPress={getWeather}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Get Weather</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Task1

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle: {
        fontSize: 24,
        color: 'black',
        textAlign: 'left',
        margin: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        margin: 10,


    }, textinput: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        height: 50,
        margin: 10,
        paddingHorizontal: 15
    },
    button: {
        paddingVertical: 20,
        backgroundColor: 'blue',
        width: '70%',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10

    },
    centerView: {
        alignItems: "center",
        margin: 10,
        borderRadius: 10

    }

})