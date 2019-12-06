import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class CommonDrugsTreatments extends Component {

  render() {
    return (
            <View>

            	<Text style={styles.paragraphBold}>
                    Acetaminophen
                </Text>
                <Text style={styles.paragraph}>
                    A pain-relieving and fever-reducing drug found in many 
                    over-the-counter medications. Sometimes called 
                    Tylenol®.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Antibiotics
                </Text>
                <Text style={styles.paragraph}>
                    A group of drugs that kill bacteria and other organisms 
                    that cause disease.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Anti-Inflammatory Drugs
                </Text>
                <Text style={styles.paragraph}>
                    Drugs that reduce the symptoms and signs of 
                    inflammation.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Cast
                </Text>
                <Text style={styles.paragraph}>
                    A cast holds a broken bone in place as it heals, prevents 
                    or decreases muscle contractures, or provides immobilization, 
                    especially after surgery. Casts immobilize the joint above 
                    and the joint below the area that is to be kept straight 
                    and without motion. For example, a child with a forearm 
                    fracture will have a long arm cast to immobilize the wrist 
                    and elbow joints.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Ibuprofen
                </Text>
                <Text style={styles.paragraph}>
                    A non-steroidal anti-inflammatory drug (NSAID) found in 
                    many over-the-counter medications, sometimes call Advil® 
                    or Motrin®.{"\n"}
                </Text>
                
            </View>
    );
  }
}

export default CommonDrugsTreatments;

const styles = StyleSheet.create({
    paragraph: {
        textAlign: 'left',
        fontSize: 14,
        marginVertical: 2,
    },
    paragraphBold: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 2,
    },
});