import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <View style={styles.userInfoSection}>
                <Image
                    source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
                    style={styles.userImage}
                />
                <View style={styles.verticalView}>
                    <Text style={styles.userName}>John Doe</Text>
                    <Text style={styles.userEmail}>john.doe@example.com</Text>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 10 }}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    userInfoSection: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row'

    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
        backgroundColor: 'red'
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    userEmail: {
        fontSize: 14,
        color: 'gray'
    },
    verticalView: {
        flexDirection: 'column',
        margin: 10
    }
});
