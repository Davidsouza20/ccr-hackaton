//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class SetTravelHourAndDate
 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Indo para</Text>
                <Text style={styles.location}>São Paulo, SP - Tiete</Text>
            
            </View>

            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffff4',
    },

    location: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 38,
    }
});

//make this component available to the app
export default SetTravelHourAndDate
;
