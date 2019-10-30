import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {Card, Button as CardButton} from 'react-native-elements';
import NavigationService from '../components/NavigationService';

class LearnMoreScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn More'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text>
                    This is the Learn More screen{'\n'}
                </Text>
                <CardButton onPress={()=>NavigationService.navigate('TSReactions')}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='What are the reactions?' />
        </View>
        );
    }
}
export default LearnMoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});