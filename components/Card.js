import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, TouchableOpacity } from 'react-native';

const imgDefault = require('../assets/characters/Unknown.jpg');

export default function Card({name, image}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {navigation.navigate('Detail')}}
        >
            <Text>There is {name}</Text>
            <Image source={{uri: image}} />
        </TouchableOpacity>
    )
}