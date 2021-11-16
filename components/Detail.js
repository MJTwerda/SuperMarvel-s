import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';
//import { View, Text, Image } from 'react-native';
import Comics from './Comics';
import Information from './Information';

const Tab = createBottomTabNavigator();

export default function Detail() {
    
    return(
        <Tab.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey', 
            }}
            initialRouteName='Comics'
        >
            <Tab.Screen name='Comics' component={Comics}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name='book-open-page-variant' type='material-community' color={color} size={size}/>
                    )
                }}
            />
                
            <Tab.Screen name='Info' component={Information}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name='tag-multiple' type='material-community' color={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}