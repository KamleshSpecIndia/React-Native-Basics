import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { postApiData } from './components/apiService';
import HomeScreen from './components/Home-Screen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const param = {
    username: 'emilys',
    password: 'emilyspass'
  }

  const headers = {
    "Content-Type":"application/json"
};

  const validateEmail = (email) => {
   
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    console.log('handleLogin')
    if (!email) {
      Alert.alert('Validation Error', 'Email is required');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Invalid email format');
      return;
    }
    if (!password) {
      Alert.alert('Validation Error', 'Password is required');
      return;
    }
       postApi()
   };
  
  const postApi = async () => {
    console.log('postApi')
    const res = await postApiData('https://dummyjson.com/auth/login',param,headers)
    
    if (res.error) {
      // setError(result.error);
      console.log(res.error)
  } else {  
    Alert.alert('Success', 'Logged in successfully');
      await AsyncStorage.setItem("LoginData",JSON.stringify(res.data))
      navigation.navigate('components/Home-Screen', {
        token: res.data.accessToken
      })
  }
  }

  return (
    <View style={styles.container}>

      <Link href={{
        pathname: 'components/Home-Screen', params: {
          name: "anand bhavsar123"
        }
      }} style={{ textDecorationLine: 'underline' }}>Go to Home Screen </Link>
      <Text style={styles.title}>Login</Text>


      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Link href={'/components/Registration'} style={{ textDecorationLine: 'underline', paddingLeft: 230 }}>Go to Register Screen </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen