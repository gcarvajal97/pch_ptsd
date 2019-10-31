import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Video } from 'expo-av';

class ReactionsToInjury extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Reactions to Injury'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ backgroundColor: '#2089DC', color: 'white', fontWeight: 'bold', fontSize: 22, textAlign: 'center', alignSelf: 'stretch' }}>
                    Reactions to Injury
                </Text>
                <Video
                    // Import video corresponding to this screen from assets
                    source={require('../assets/videos/vidReactToInjury.mp4')}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    shouldPlay
                    useNativeControls
                    style={{ height: 204, width: '100%', maxHeight: 254, borderColor: '#2089DC', borderWidth: 14, borderTopWidth: 0, borderBottomWidth: 0, marginBottom:-1}}
                />
                <Text style={{ backgroundColor: '#2089DC', color: 'white', alignSelf: 'stretch', paddingLeft: 15, paddingRight:15, fontSize: 15, borderBottomWidth:2, borderBottomColor:'#2089DC'}}>
                    <Text style={{ fontWeight: 'bold' }}>These reactions are expected.</Text> With a little time and extra support, most children feel better.
                </Text>
                <ScrollView>
                    <Text style={styles.paragraph}>
                    One of the most important things you can do to help your child is to recognize your child’s reactions to injury. 
                    Many reactions are normal and common; some are more worrisome. 
                    </Text>
                    <Text style={styles.paragraph}>
                    The first step in helping your child recover is to learn what reactions to look for and what you can do to help 
                    your child respond in a healthy way.
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:2, marginBottom:8, color:'#2089DC'}}>
                    In the first few days after an injury, these are the common child trauma symptoms:
                    </Text>
                    <Text style={styles.bullet}>Nearly all children feel upset, jumpy, or worried at times.</Text>
                    <Text style={styles.bullet}>Parents and other family members can have similar reactions.</Text>
                    <Text style={styles.bullet}>Nearly everyone feels symptoms of stress; Headache, tense muscles, knots in your stomach, 
                                                sweaty palms, and the feeling that life is a bit out of control.</Text>
                    <Text style={styles.bullet}>Parents and children may argue more.</Text>
                    <Text style={styles.bulletLast}>Children may be more clingy or have trouble sleeping.</Text>
                    <Text style={{fontWeight: 'bold', fontSize:20, alignSelf:'stretch', textAlign:'left',marginLeft:5, marginTop:2, marginBottom:8, color:'#2089DC'}}>
                    You may even notice some positive reactions to their injury:
                    </Text>
                    <Text style={styles.bullet}>Feeling thankful and relieved that nothing worse happened</Text>
                    <Text style={styles.bulletLast}>A resolve to do things more safely in the future</Text>
                    <Text style={styles.paragraph}>
                    When an accident or injury causes overwhelming feelings of fear, helplessness, and horror, 
                    it can lead to more than just everyday stress reactions. It can lead to <Text style={{fontWeight:'bold'}}>traumatic stress.</Text>
                    </Text>        
                </ScrollView>
            </View>
        );
    }
}
export default ReactionsToInjury;

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
    bulletLast: {
        marginTop:1,
        marginBottom:6, 
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