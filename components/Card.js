import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const imgDefault = require('../assets/Unknown.jpg')

export default function Card({name, img}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
        >
            <Text>There is {name}</Text>
            <Image source={img ? img : imgDefault} />
        </TouchableOpacity>
    )
}