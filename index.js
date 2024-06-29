// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const images = [
    { id: '1', uri: 'https://picsum.photos/200/300?image=1', description: 'Eating' },
    { id: '2', uri: 'https://picsum.photos/200/300?image=2', description: 'Drinking' },
    { id: '3', uri: 'https://picsum.photos/200/300?image=3', description: 'Sleeping' },
    { id: '4', uri: 'https://picsum.photos/200/300?image=4', description: 'Walking' },
    { id: '5', uri: 'https://picsum.photos/200/300?image=5', description: 'Running' },
    { id: '6', uri: 'https://picsum.photos/200/300?image=6', description: 'Talking' },
    { id: '7', uri: 'https://picsum.photos/200/300?image=7', description: 'Reading' },
    { id: '8', uri: 'https://picsum.photos/200/300?image=8', description: 'Writing' },
];

export default function App() {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Communication via Images</Text>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    list: {
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});