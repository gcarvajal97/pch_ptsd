import React, { Component } from 'react';
import { ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { Card } from 'react-native-elements';

import NavigationService from '../components/NavigationService';

class ResourcesScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Additional Resources'
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
                <Text>
                    This is the resource screen.
                </Text>
                <Button title='Go Back' onPress={()=>NavigationService.navigateDrawer('Home')}>
                </Button>
        </View>
        );
    }
}
export default FindHelpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});