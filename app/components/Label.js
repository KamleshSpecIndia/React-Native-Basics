import React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView,TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


const labelComponents = () => {
    const word = "Multiple text Color";
    const firstPart = word.substring(0, 8);
    const secondPart = word.substring(8);
    const longText = "This is an example of a long text that needs truncation or clipping.";
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>


                <View style={styles.container}>
                    {/* Basic Text */}
                    <View style={styles.spacing}>
                        <Text style={styles.Text}>Welcome</Text>
                    </View>


                    {/* Clickable Text */}
                    <Text style={styles.clickableText} onPress={() => alert('Text Pressed!')}>
                        Tap Me!
                    </Text>
                    <Text style={styles.clickableText} onPress={showAlert}>
                        Open alert box!
                    </Text>
                    {/* Multi-line Text with Number of Lines and Ellipsize Mode */}
                    <Text style={styles.multiLineText} numberOfLines={7}>
                        This is a very long piece of text that will be truncated if it exceeds the specified number of lines.This is a very long piece of text that will be truncated if it exceeds the specified number of lines.This is a very long piece of text that will be truncated if it exceeds the specified number of lines1233.
                    </Text>

                    {/* Styled Text with Font Weight and Color */}
                    <Text style={styles.styledText}>Custom Styled Text</Text>

                    <Text style={styles.baseText}>
                        <Text style={{ color: 'black' }}>{firstPart}</Text>
                        <Text style={{ color: 'purple' }}>{secondPart}</Text>
                    </Text>

                    <Text style={styles.text} lineBreakMode="tail" numberOfLines={1}>
                        Tail Mode: {longText}
                    </Text>

                    <Text style={styles.text} lineBreakMode="middle" numberOfLines={1}>
                        Tail Mode: {longText}
                    </Text>

                    <Text style={styles.text} lineBreakMode="head" numberOfLines={1}>
                        Tail Mode: {longText}
                    </Text>

                    <View>
                        <Text style={styles.text} lineBreakMode="middle" numberOfLines={1} >
                            Tail Mode1: {longText}

                        </Text>
                    </View>

                    <View> 
                    </View>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>





    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        top: 70,
        //justifyContent:"center",
        //    paddingLeft: 15, // Left padding
        //    paddingRight: 15, // Right padding
    },
    spacing: {
        width: "100%",
    },
    Text: {
        backgroundColor: "red",
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",

    },
    clickableText: {
        top: 10,
        padding: 10,
        color: "red",
        width: "100%",
        textAlign: "right",
        textDecorationLine: 'underline',

    },
    multiLineText: {
        fontSize: 16,
        color: 'darkgray',
        padding: 10
    },
    styledText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginVertical: 10,
    },
    baseText: {
        fontSize: 30,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
    backButton: {
        position: "absolute",
        left: 10,
        padding: 10,
        zIndex: 10,
        top:-40
      },

});

export default labelComponents;



const showAlert = () => {
    Alert.alert(
        'App Name',  // Title (use your app's name)
        'Are you sure you want to proceed?',  // Message
        [
            {
                text: 'No', // No button
                onPress: () => console.log('No Pressed'),
                style: 'cancel', // Adds cancel style (optional)
            },
            {
                text: 'Yes', // Yes button
                onPress: () => console.log('Yes Pressed'),
            },
        ],
        { cancelable: false }  // Prevent dismissing by tapping outside (optional)
    );
};