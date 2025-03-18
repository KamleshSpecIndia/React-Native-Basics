import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

export default function _layout() {
  return (
    
    <Tabs
    screenOptions={{
      tabBarStyle: {
        height: 50, // Adjust tab bar height
        backgroundColor: '#fff',
        position: 'absolute', // Ensure the center icon floats
        borderTopWidth: 0, // Remove border for better look
      },
      tabBarActiveTintColor: '#4A90E2',
      tabBarInactiveTintColor: '#888',
      headerStyle:{
        height:50,
      },
      headerTitleStyle: {
        fontSize: 16, // Reduce font size for better fit
        fontWeight: 'bold',
    },
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarLabel:"",
        tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" size={26} color={color} />
        ),
      }}
    />

   
    <Tabs.Screen
      name="Challenges-Screen"
      options={{
        title: 'Challenges',
        tabBarLabel:"",
        tabBarIcon: ({ color }) => (
          <Ionicons name="search-outline" size={26} color={color} />
        ),
       
      }}
    />

    
    <Tabs.Screen
      name="Messag-Screen"
      options={{
        title: 'Messag',
        tabBarLabel:"",
        tabBarIcon: ({ color }) => (
          <View
            style={{
              height: 50,
                width: 50, // Make width and height equal
                position: 'absolute',
                bottom: 3,
                backgroundColor: '#4A90E2',
                borderRadius: 25, // Half of width or height
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            }}
          >
            <Ionicons name="add-circle-outline" size={50} color="#fff" />
          </View>
        ),
      }}
    />

   
    <Tabs.Screen
      name="notifications-Screen"
      options={{
        title: 'Notification',
        tabBarLabel:"",
        tabBarIcon: ({ color }) => (
          <Ionicons name="notifications-outline" size={26} color={color} />
        ),
      }}
    />

   
    <Tabs.Screen
      name="Profile-Screen"
      options={{
        title: 'Profile',
        tabBarLabel:"",
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-outline" size={26} color={color} />
        ),
      }}
    />
  </Tabs>
   
  )
}