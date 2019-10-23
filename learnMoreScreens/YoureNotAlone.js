import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';

class YoureNotAlone extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Learn More'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ backgroundColor: '#2089DC', color: 'white', fontWeight: 'bold', fontSize: 22, textAlign: 'center', alignSelf: 'stretch' }}>
                    You Are Not Alone
                </Text>
                <Video
                    source={require('../assets/videos/vidAlone.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                />
                <Text style={{ backgroundColor: '#2089DC', color: 'white', alignSelf: 'stretch', paddingLeft: 15, fontSize: 15, borderBottomWidth:2, borderBottomColor:'#2089DC'}}>
                    <Text style={{ fontWeight: 'bold' }}>Your child is not alone.</Text> Every year, millions of children in the United States are injured.
                </Text>
                <ScrollView>
                <Text style={{fontWeight: 'bold', fontSize:22, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:2, marginBottom:1, color:'#2089DC'}}>
                    Each year in the United States, child injury statistics show that:
                    </Text>
                <Text style={styles.bullet}>1 in 4 children and teens need medical care for an injury.</Text>
                <Text style={styles.bullet}>7 million injured children are treated in the ER.</Text>
                <Text style={styles.bullet}>Several hundred thousand injured children are admitted to the hospital.</Text>

                <Text style={styles.paragraph}>
                    Right now, hundreds of thousands of children across the country are recovering from an injury. 
                    Like you, their parents and other caring adults want to help them the best way possible. 
                    While it is important to tend to the wounds and rehabilitation, it is just as important 
                    to remember to look beyond the physical injuries.
                    </Text>
                <Text style={styles.paragraph}>
                    With all the doctors, nurses, and therapists who will treat your child’s injury, 
                    remember that no one is more important than you for your child’s recovery. 
                    In this website, we took the best from science and practice to help you help your child after an injury.
                    </Text>
                <Text style={styles.paragraph}>
                    In this website, we took the best from science and practice to help you help your child after an injury. 
                    In this website, we took the best from science and practice to help you help your child after an injury. 
                    In this website, we took the best from science and practice to help you help your child after an injury. 
                    In this website, we took the best from science and practice to help you help your child after an injury.
                    </Text> 
                <Text style={styles.paragraph}>
                    In this website, we took the best from science and practice to help you help your child after an injury. 
                    In this website, we took the best from science and practice to help you help your child after an injury. 
                    In this website, we took the best from science and practice to help you help your child after an injury.
                    </Text>             
                </ScrollView>
            </View>
        );
    }
}
export default YoureNotAlone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    bullet: {
        marginVertical:1, 
        marginHorizontal:18, 
        textAlign:'left', 
        alignSelf:'stretch', 
        fontWeight:'bold',
        fontSize:14
    },
    paragraph: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14
    }
});