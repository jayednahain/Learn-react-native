import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function L46GenerateRandomColors() {
    const [colors, setColors] = useState([]);

    const onPressAddColorButton = ()=>{
        setColors([...colors,generateRandomRGB()])
        console.warn(colors)
    }

    return (
        <View>
            {/* <Text>L46GenerateRandomColors</Text> */}
            <Button title='Add color' onPress={onPressAddColorButton} />
            <View style={{ height: 100, width: 100, backgroundColor: generateRandomRGB() }} />
        </View>
    )
}

const generateRandomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({})