import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Colors from './Colors';

export default ToDolistat = ({ list }) => {

    const completedCount = list.todos.filter(todo => todo.completed).length;

    return (
        <View style={[styles.listContainer, {backgroundColor: list.color }]}>
            
            <Text style={styles.listTitle} numberOfLines={1}>{list.name}</Text>

            <View>
                <View style={{ alignItems: 'flex-start'}}>
                    <Text style={styles.count}>{completedCount} task</Text>
              
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        
        borderRadius: 10,
        marginVertical: 4.5,
        width: 301,
        height: 69,
        
    
        
    },  
    listTitle:{
        fontSize: 19,
        fontWeight: '700',
        color: 'black',
        marginLeft: 16,
        marginTop: 12,
        opacity: 0.9,
        
        
        
    },  
    count: {
        fontSize: 14,  
        fontWeight: '200',
        color: 'black',
        opacity: 0.5,
        marginLeft: 16,
        marginTop: 4,
        
    },
  
});
