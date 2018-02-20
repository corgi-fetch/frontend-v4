import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import TimelineObject from '../atoms/TimelineObject';

export default class Timeline extends React.Component {
    render () {

        return (
            
            <FlatList
                data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}]}
                renderItem={({item}) => <TimelineObject text={item.key}></TimelineObject>}
            />
            
        )
    }
}