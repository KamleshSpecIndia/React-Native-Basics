import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import CustomDrawerContent from '../CustomDrawerContent'



const _layout = () => {
    return (


        <GestureHandlerRootView>
            <Drawer  drawerContent={(props) => < CustomDrawerContent {...props } />}
            screenOptions={{
                tabBarStyle: {
                    height: 50, // Adjust tab bar height
                    backgroundColor: '#fff',
                    position: 'absolute', // Ensure the center icon floats
                    borderTopWidth: 0, // Remove border for better look
                },
                tabBarActiveTintColor: '#4A90E2',
                tabBarInactiveTintColor: '#888',
                headerStyle: {
                    height: 50,
                },
                headerTitleStyle: {
                    fontSize: 16, // Reduce font size for better fit
                    fontWeight: 'bold',
                },
            }}>
                
                
                <Drawer.Screen
                    name="index"
                    options={{ drawerLabel: 'Home', title: 'Home Page' }}
                />
                <Drawer.Screen
                    name="about"
                    options={{ drawerLabel: 'About', title: 'About Page' }}
                />
                <Drawer.Screen
                    name="contact"
                    options={{ drawerLabel: 'Contact', title: 'Contact Page' }}
                />
    

                
            </Drawer>
        </GestureHandlerRootView>


    )
}

export default _layout