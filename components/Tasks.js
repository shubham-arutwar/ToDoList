import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        marginBottom: 15,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,
    },
    itemText: {
        flexShrink: 1,
    },
})

export default Task;