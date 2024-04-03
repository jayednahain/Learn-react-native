import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function L46GenerateRandomColors() {
    const [colors, setColors] = useState([]);

    const onPressAddColorButton = () => {
        setColors([...colors, generateRandomRGB()])
        console.warn(colors)
    }

    const renderFlatListItem = (item) => {
        console.warn(item)
        return (
            <SingleColorComponent color={item} />
        )
    }

    try {
        return (
            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                {/* <Text>L46GenerateRandomColors</Text> */}
                <Button title='Add color' onPress={onPressAddColorButton} />
                {/* <SingleColorComponent color={generateRandomRGB()} /> */}
                <FlatList
                    keyExtractor={item => item}
                    data={colors}
                    renderItem={({item})=>{
                        return <SingleColorComponent color={item}/>
                    }}
                />
            </View>
        )

    } catch (error) {
        console.warn(error)
    }


}

const generateRandomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

const generateHexColorFormRgb = (rgb) => {
    const components = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const hex = "#" +
        ("0" + parseInt(components[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(components[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(components[3], 10).toString(16)).slice(-2);
    return hex.toUpperCase();
}

const SingleColorComponent = ({ color, titleTextRgb, titleTextHex }) => {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 5, borderColor: color, borderWidth: 0.9, borderRadius: 15 }}>
            <View style={{ height: 100, width: 100, backgroundColor: color, borderRadius: 15 }} />
            <View style={{ marginHorizontal: 10, marginVertical: 5, justifyContent: 'center' }}>
                <Text>{color}</Text>
                <Text>{generateHexColorFormRgb(color)}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({})