// import 'react-native-gesture-handler';

// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

// // const DATA = [
// //     { id: '1', title: 'Draft' },
// //     { id: '2', title: 'Pending Upload' },
// //     { id: '3', title: 'Pending Approval' },
// //     { id: '4', title: 'Pending Approved' },
// // ];

// const DATA_MAP = {
//     Draft: [{ id: '1', title: 'Draft Item 1' }, { id: '2', title: 'Draft Item 2' }],
//     "Pending Upload": [{ id: '3', title: 'Upload Item 1' }],
//     "Pending Approval": [],
//     "Pending Approved": [],
// };
// const data = DATA_MAP[route.name] || [];

// const CallsScreen = ({ route }) => (


//     return (
//         <View style={styles.container}>
//             {data.length > 0 ? (
//                 <FlatList
//                     data={data}
//                     keyExtractor={(item) => item.id}
//                     renderItem={({ item }) => (
//                         <View style={styles.item}>
//                             <Text style={styles.text}>{item.title}</Text>
//                         </View>
//                     )}
//                 />
//             ) : (
//                 <Text style={styles.noDataText}>No data available</Text>
//             )}
//         </View>
//     );
// );

// const App = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarActiveTintColor: '#007bff',
//                 tabBarInactiveTintColor: 'gray',
//                 tabBarStyle: { backgroundColor: '#fff' },
//                 tabBarIndicatorStyle: {
//                     backgroundColor: '#007bff',
//                     height: 3,
//                 },
//                 tabBarLabelStyle: { fontSize: 16 },
//             }}
//         >
//             <Tab.Screen name="Draft" component={CallsScreen} />
//             <Tab.Screen name="Pending Upload" component={CallsScreen} />
//             <Tab.Screen name="Pending Approval" component={CallsScreen} />
//             <Tab.Screen name="Pending Approved" component={CallsScreen} />
//         </Tab.Navigator>
//     );
// };

// export default App;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f0f2f5',
//     },
//     text: {
//         fontSize: 20,
//         color: '#333',
//     },
//     noDataText: {
//         fontSize: 16,
//         color: 'gray',
//         textAlign: 'center',
//     },
//     item: {
//         backgroundColor: '#fff',
//         padding: 15,
//         marginVertical: 8,
//         borderRadius: 5,
//         width: '100%',
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 2,
//     },
// });

import 'react-native-gesture-handler';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CapsuleButton from './capsuleShape';
import SliderComponents from './Slider';

const Tab = createMaterialTopTabNavigator();

const DATA_MAP = {
    Draft: [{ id: '1', title: 'Draft Item 1' }, { id: '2', title: 'Draft Item 2' }],
    "Pending Upload": [{ id: '3', title: 'Upload Item 1' }],
    "Pending Approval": [],
    "Pending Approved": [],
};

const CallsScreen = ({ route }) => {
    const data = DATA_MAP[route.name] || [];

    return (
            <View style={styles.container}>
                {data.length > 0 ? (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        )}
                     style = { { width:'100%'}}
                    />
                ) : (
                    <Text style={styles.noDataText}>No data available</Text>
                )}
           </View>
    );

};

const App = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: '#fff' },
                tabBarIndicatorStyle: {
                    backgroundColor: '#007bff',
                    height: 3,
                   
                },
                tabBarLabelStyle: { fontSize: 16 },
                tabBarScrollEnabled: true, 
            }}
        >
            <Tab.Screen name="Custom Option" component={CapsuleButton} />
            <Tab.Screen name="Draft" component={CallsScreen} />
            <Tab.Screen name="Pending Upload" component={CallsScreen} />
            <Tab.Screen name="Pending Approval" component={CallsScreen} />
            <Tab.Screen name="Pending Approved" component={CallsScreen} />
        </Tab.Navigator>

    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        padding: 10,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    noDataText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
        
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
});



{/* <View style={styles.container}>
{route.name === "Draft" ? (
    <View style={styles.container}>
        <CapsuleButton />
    </View>
) : route.name === 'Pending Approved' ? (
    <View>
     <SliderComponents></SliderComponents>
    </View>
):
(
    <Text style={styles.noDataText}>No data available</Text>
) }
</View> */}