import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class TypesOfInjury extends Component {

  render() {
    return (
            <View>
            
       			<Text style={styles.paragraphBold}>
                    Abrasion
                </Text>
                <Text style={styles.paragraph}>
                    A superficial rub or wearing off of the skin, usually caused 
                    by a scrape or brush burn.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Abdominal Injury
                </Text>
                <Text style={styles.paragraph}>
                    Abdominal trauma (trauma to the abdomen) involves injury to 
                    the belly between the chest and the hips and the organs inside 
                    – the most commonly injured include the small intestine, liver, 
                    spleen, pancreas, kidneys, and bladder.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Dislocation
                </Text>
                <Text style={styles.paragraph}>
                    A dislocation occurs when extreme force is put on a joint and 
                    causes bones to come out of the joint. Dislocations can cause 
                    two or more bones to come together.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Fracture
                </Text>
                <Text style={styles.paragraph}>
                    If more force is put on a bone than it can stand, it will split 
                    or break. A break of any size is called a fracture. If the 
                    broken bone punctures the skin, it is called an open fracture. 
                    If a break is in a lot of pieces, it is called a compound 
                    fracture.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Head Injury
                </Text>
                <Text style={styles.paragraph}>
                    Head injury is a broad term that describes injuries to the 
                    scalp, skull, brain, and tissue and blood vessels in the 
                    child's head. Some head injuries are also called brain 
                    injury, or traumatic brain injury (TBI), depending on the 
                    extent of the head trauma. Concussion is the most common type 
                    of TBI.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Hematoma
                </Text>
                <Text style={styles.paragraph}>
                    A large bruise or collection of blood under the skin, 
                    producing discoloration and swelling in the area. It is 
                    usually caused by trauma.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Laceration
                </Text>
                <Text style={styles.paragraph}>
                    A cut, tear, or ragged opening in the skin caused by an 
                    injury or trauma.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Overuse Conditions
                </Text>
                <Text style={styles.paragraph}>
                    Injuries due to minor trauma over a long period of time, 
                    involving bone, muscles, ligaments, and/or tendons.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Puncture Wound
                </Text>
                <Text style={styles.paragraph}>
                    A deep wound or hole in the skin and deeper tissue layers 
                    caused by a sharp object such as a nail, stick, a dog’s 
                    tooth, or a piece of metal.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Sprain
                </Text>
                <Text style={styles.paragraph}>
                    A partial or complete tear of a ligament (connects two bones) 
                    or tendon (connects a bone to a muscle). Sprains often affect 
                    the ankles, knees, or wrists.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Strain
                </Text>
                <Text style={styles.paragraph}>
                    An injury to a muscle or tendon. Often caused by overuse, 
                    force, or stretching.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Stress Fracture
                </Text>
                <Text style={styles.paragraph}>
                    A hairline crack in the bone that develops because of repeated 
                    or prolonged forces to the bone.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Whiplash
                </Text>
                <Text style={styles.paragraph}>
                    Whiplash occurs when the muscles or ligaments (soft tissue) of 
                    the neck are injured by a sudden jerking or “whipping” of the 
                    head. This type of motion stretches the muscles or ligaments 
                    of the neck beyond their normal range of motion.{"\n"}
                </Text>
                
            </View>
    );
  }
}

export default TypesOfInjury;

const styles = StyleSheet.create({
    paragraph: {
        textAlign: 'left',
        fontSize: 14,
        marginVertical: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    paragraphBold: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 2,
        marginLeft: 20,
        marginRight: 20,
    },
});