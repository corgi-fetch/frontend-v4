import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class TimelineObject extends React.Component {
    render () {
        return (
            <TouchableOpacity style={[styles.container]}>
                <View style={[styles.row]}>
                    <Text>{this.props.text}</Text>
                </View>
                <View style={[styles.row]}>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        height: 90,
        backgroundColor: 'powderblue'
    },
    inner: {
        flex: 1
    },
    row: {
        flex: 1
    }
});