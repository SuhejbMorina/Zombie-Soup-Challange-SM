import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Note extends React.Component {
    render() {
        return (

            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    note: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
    },
    noteText: {
        marginLeft: 28,
        borderLeftColor: '#e91e63',
        fontSize: 16,
    },
    
    })