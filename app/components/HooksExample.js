import { View, Text, StyleSheet, Button, TextInput,ActivityIndicator,FlatList } from 'react-native'
import React, { useState, useEffect, useRef, createContext, useCallback } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import BackButton from './BackButton'
import { router, useRouter } from 'expo-router'
import ChildComponent1 from './ChildComponent1'
import apiCall from './WebService'

let userMessage = "Welcome to spec india.";
const Message = "Hello welcome to react native tutorial.";
export const HooksContext = createContext();

const HooksExample = () => {

    const [count, setcount] = useState(0)
    const [name, setName] = useState("")

    const [data, setData] = useState(null)
    const inputRefs = useRef([]);

    const [countincrement, setCountValue] = useState(0);
    const [randomValue, setRandomValue] = useState(0);



    const focusNextInput = (index) => {
        if (inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((Response) => Response.json())
            .then((json) => setData(json))
    }, []);

    // useEffect(() => {
    //     console.log('use effect call every time')
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((Response) => Response.json())
    //         .then((json) => setData(json))
    // });

    //   useEffect(() => {
    //     console.log('use effect call click of button')
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((Response) => Response.json())
    //         .then((json) => setData(json))
    // }, [count]);

    const increment = useCallback(() => {
        setCountValue((prev) => prev + 1);
    }, []);

    const API_URL = "https://jsonplaceholder.typicode.com/posts"; 
    const { userData, loading, error } = apiCall(API_URL);
    if (loading) return <ActivityIndicator size="large" color="blue" />;
    if (error) return <Text>Error: {error}</Text>;
    

    return (

        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.view} >
                    <BackButton />
                    <Text style={styles.centerText}>Use State Example</Text>
                    <View>
                        <Text style={{ textAlign: 'center' }}>Count: {count}</Text>
                        <Button title="Increase" onPress={() => setcount(count + 1)} />
                        <Text style={{ textAlign: 'center' }}>value of user is : {name}</Text>
                        <TextInput onChangeText={(text) => setName(text)} placeholder="Enter user name" style={{
                            borderWidth: 1,
                            borderColor: "black"
                        }}>
                        </TextInput>
                    </View>
                    <Text style={styles.centerText}>Use Effect Example</Text>
                    <View>
                        <Text style={{ textAlign: 'center' }}>user name is : {data ? data.title : "Loading..."}</Text>
                    </View>

                    <Text style={styles.centerText}>Use Ref state Example</Text>
                    <View>
                        {[...Array(3)].map((_, index) => (
                            <TextInput
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                style={styles.input}
                                placeholder={`Input ${index + 1}`}
                                returnKeyType="next"
                                onSubmitEditing={() => focusNextInput(index)}
                            />
                        ))}
                    </View>

                    <Text style={styles.centerText}>Use context hooks Example</Text>
                    <HooksContext.Provider value={Message}>
                        <View>
                            <ChildComponent1 msg={userMessage}></ChildComponent1>
                        </View>
                    </HooksContext.Provider>


                    <Text style={styles.centerText}>CustomHooks Example</Text>

                    <View>
                    <FlatList
                            data={userData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <Text> - {item.title}</Text>}
                        />
                    </View>
                    

                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        margin: 10
    },
    centerText: {
        textAlign: 'center',
        color:'red'
    }

});

export default HooksExample


const IncrementButton = React.memo(({ onPress }) => {
    console.log("Button re-rendered!");
    return <Button title="Increment" onPress={onPress} />;
});