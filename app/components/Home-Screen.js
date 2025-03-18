import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
    const param = useLocalSearchParams()
    const token = param.token ? param.token : "Text";
    const [getToken, setToken] = useState('')

    useEffect(() => {
        fetchUserData();
    },[]);

    const fetchUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem("LoginData");
            if (userData) {
                const parsedData = JSON.parse(userData);
                console.log("User Data:", parsedData);
                console.log("Access Token:", parsedData.accessToken);
                setToken(parsedData.accessToken)
            } else {
                console.log("No user data found in AsyncStorage");
                setToken('')
                
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <View>
            <Text>{token}</Text>
            <Text>{getToken}</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})