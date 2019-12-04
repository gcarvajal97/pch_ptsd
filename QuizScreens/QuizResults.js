import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";
import {Card, Button as CardButton} from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const content = {
    1: {title: 'Thinks a lot about what happened to them', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
    2: {title: 'Has bad dreams or nightmares since the injury', body: ' Suspendisse nec placerat risus. Nunc congue dolor at mauris tristique luctus. Duis posuere quam gravida tincidunt laoreet. Phasellus quis nulla vitae lacus egestas maximus.'},
    3: {title: 'Gets upset or has physical reactions at reminders of what happened', body: 'Suspendisse at nunc orci. Aenean est turpis, finibus ut commodo vel, suscipit quis augue. Sed convallis augue ac nisl semper facilisis.'},
    4: {title: 'Doesn’t want to talk about what happened or tries to push it out of their mind', body: 'Cras libero nisi, lacinia rutrum urna non, tincidunt elementum nibh. Sed finibus volutpat metus, at viverra dui dictum non. Fusce dictum est at purus tempus auctor. Nulla odio ante, molestie non neque sed, eleifend consectetur tortor. Aenean ut rutrum libero. '},
    5: {title: 'Wants to stay away from people, places, or things that are reminders of what happened', body: 'Vestibulum quis arcu in purus congue pellentesque. Sed in nulla molestie, volutpat leo vel, efficitur ante.'},
    6: {title: 'Afraid of something that they were not afraid of before (or a previous fear or worry seems to get worse)', body: 'Cras mi sem, viverra non scelerisque eget, ultricies sed mi. Donec ac ornare lacus, sed semper arcu. Quisque vel neque in tellus volutpat accumsan sed eget lacus.'},
    7: {title: 'Not interested in usual activities, since the injury', body: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent tincidunt nibh a euismod interdum. Maecenas gravida nulla ut tellus porta placerat. '},
    8: {title: 'Not interested in being with people they usually like being with, since the injury', body: 'Cras iaculis auctor mi vitae lobortis. Donec sit amet dignissim sem. Donec hendrerit iaculis nulla, vitae ornare magna euismod pharetra. '},
    9: {title: 'Worries a lot that something else bad will happen', body: 'Morbi pulvinar venenatis sapien vel condimentum. Phasellus nibh nulla, interdum et suscipit et, tincidunt quis tortor. In nec mattis nisl. Maecenas eros sapien, scelerisque et nunc sollicitudin, pretium lacinia lacus.'},
    10: {title: 'Startles easily – for example, jumps if there is a sudden noise', body: 'Duis iaculis vulputate mi, a accumsan felis imperdiet ac. Nullam ut vehicula est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '},
    11: {title: 'Seems irritable or has angry outbursts, since the injury', body: 'Praesent suscipit lacus vel ullamcorper egestas. Vestibulum sodales enim mi, id ultricies velit aliquam vitae. In dapibus dictum urna, id posuere dui dignissim id. Nulla imperdiet justo orci, et tincidunt tellus aliquet vitae.'},
    12: {title: 'Has trouble paying attention to things, since the injury', body: 'Nam lacus magna, dignissim eleifend enim id, varius molestie est. Nulla finibus nunc at risus blandit, luctus porttitor libero sodales. In sit amet eros id neque venenatis tristique. '},
    13: {title: 'Has trouble falling or staying asleep, since the injury', body: 'Nam ipsum nulla, porta et erat eu, aliquam vestibulum ante. Nam sit amet posuere odio, eu finibus nunc. Etiam vitae enim mauris. Pellentesque tincidunt elit non tortor tincidunt mollis eu non est. '},
    14: {title: 'Is still having pain or discomfort', body: 'Cras laoreet id augue id dignissim. Etiam ullamcorper luctus mauris eget mollis. Aenean vel turpis non magna laoreet volutpat. '},
    15: {title: 'Has had other behavior changes since the injury', body: 'Duis cursus orci quis eros ultricies, sit amet vestibulum justo congue. Mauris porta est non porta eleifend.'},
    16: {title: 'Is having trouble with returning to school or other activities', body: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ut ante viverra, mollis odio quis, hendrerit elit. Quisque dignissim nisi quis lectus placerat, eget viverra arcu fringilla. '},
    17: {title: 'Brothers or sisters are upset or worried', body: 'Vestibulum quis semper orci, at porta magna. Quisque et urna congue, ultrices augue nec, vestibulum mi. Integer ante est, interdum sit amet felis eget, blandit rutrum risus.'},
    18: {title: 'You (parent) are stressed or worried yourself', body: 'Sed rutrum efficitur turpis, eu rhoncus nisl molestie sit amet. In vitae enim facilisis, varius nisl ac, condimentum magna.'},
};

export default class QuizResults extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Take the Quiz'
    }

    render() {
        // Receive results using props, apparently only way to do this. RN has an issue with params and StackNavigator at the moment.
        // It still works as intended, but I was trying to use the modern practice of NavigationActions and creating a NavigationService. 
        const results = this.props.navigation.getParam('results', 'nothing found');

        return (
            <View style={styles.container}>
                <ScrollView>
                {                
                    Object.entries(results).map(([key,v])=>{
                        if (v <= 1) {
                            return <Card key={key} title={content[key].title} titleStyle={{color:'#2089DC'}}>
                            <Text style={{ marginBottom: 5 }}> {content[key].body} </Text>
                            </Card>
                        }
                    })
                }
                </ScrollView>
        </View>
        );
    }
}


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
        fontSize:14,
        paddingTop: 4,
    },
    paragraph: {
        alignSelf:"center", 
        paddingVertical:1, 
        paddingHorizontal:5,
        fontSize: 14,
        marginTop: 5,
    },
    title: {
        backgroundColor: '#2089DC', 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 22, 
        textAlign: 'center', 
        alignSelf: 'stretch'
    },
});