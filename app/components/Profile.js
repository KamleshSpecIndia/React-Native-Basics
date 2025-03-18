import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Button } from 'react-native'
import React, { useReducer, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const initialState = {
    email: "",
    password: "",
    userData: [],
    editingId: null,
};


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_PASSWORD":
            return { ...state, password: action.payload };
        case "ADD_USER":
            return {
                ...state,
                userData: [...state.userData, { id: Date.now().toString(), email: state.email, password: state.password }],
                email: "",
                password: "",
                editingId: null, 
            };
        case "UPDATE_USER":
            return {
                ...state,
                userData: state.userData.map(user =>
                    user.id === state.editingId ? { ...user, email: state.email, password: state.password } : user
                ),
                email: "",
                password: "",
                editingId: null, //
            };

        case "REMOVE_USER":
            return {
                ...state, userData: state.userData.filter((user) => user.id !== action.payload)
            };
        case "EDIT_USER":
            return {
                ...state, email: action.payload.email, password: action.payload.password, editingId: action.payload.id

            };

        default:
            return state;
    }
};

const Profile = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleLogin = () => {
        if (state.editingId) {
            dispatch({ type: "UPDATE_USER" }); 
        } else {
            dispatch({ type: "ADD_USER" }); 
        }
    };
    const handleEdit = (item) => {
        dispatch({ type: "EDIT_USER", payload: item });
    };
    const handleDelete = (id) => {
        dispatch({ type: "REMOVE_USER", payload: id });
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.view}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                        value={state.email}
                        onChangeText={(text) => dispatch({ type: "SET_EMAIL", payload: text })}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        value={state.password}
                        onChangeText={(text) => dispatch({ type: "SET_PASSWORD", payload: text })}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                        <Text style={styles.buttonText}>{state.editingId ? "Update" : "Save"}</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={state.userData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <View>
                                    <Text>Email: {item.email}</Text>
                                    <Text>Password: {item.password}</Text>
                                </View>


                                <View style={styles.verticalView}>
                                    <TouchableOpacity style={{ marginRight: 8, paddingLeft: 150 }} onPress={() => handleEdit(item)}>
                                        <Text>Edit</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => handleDelete(item.id)} >
                                        <Text>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: '90%'
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        marginTop: 10,
        marginRight: 250,
        flexDirection: "row",
    },
    verticalView: {
        flexDirection: "row", 
        alignItems: "center",
    }

});

export default Profile