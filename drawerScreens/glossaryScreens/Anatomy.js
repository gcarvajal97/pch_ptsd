import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class Anatomy extends Component {

  render() {
    return (
            <View>
            
       			<Text style={styles.paragraphBold}>
                    Clavicle
                </Text>
                <Text style={styles.paragraph}>
                    A bone that links the scapula (shoulder blade) and sternum 
                    (breastbone), is situated just above the first rib on either 
                    side of the neck, and has the form of a narrow elongated S 
                    -- also called collarbone.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Cranium
                </Text>
                <Text style={styles.paragraph}>
                    The skeleton of the head forming a bony case that encloses 
                    and protects the brain -- also called skull.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Femur
                </Text>
                <Text style={styles.paragraph}>
                    The top bone of the lower limb that is the longest and 
                    largest bone in the human body, extending from the hip to the 
                    knee -- also called thigh bone.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Fibula
                </Text>
                <Text style={styles.paragraph}>
                    The outer and usually the smaller of the two bones of the 
                    lower limb below the knee that is the slenderest bone of 
                    the human body in proportion to its length -- also called 
                    shin bone.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Humerus
                </Text>
                <Text style={styles.paragraph}>
                    The longest bone of the upper arm or forelimb extending from 
                    the shoulder to the elbow.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Kidney
                </Text>
                <Text style={styles.paragraph}>
                    The kidneys are bean-shaped organs located just under the 
                    rib cage in the back, one on each side. They are responsible 
                    for filtering the by-products of our body’s metabolism from 
                    the blood and removing this waste as urine.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Liver
                </Text>
                <Text style={styles.paragraph}>
                    The liver is a large organ located under the ribcage in the 
                    right upper part of the abdomen. It is responsible for 
                    producing bile, and it plays a major role in the handling 
                    and processing of nutrients.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Mandible
                </Text>
                <Text style={styles.paragraph}>
                    The lower jaw.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Orbits
                </Text>
                <Text style={styles.paragraph}>
                    The bony cavity that occupies the lateral front of the 
                    skull immediately beneath the frontal bone on each side 
                    and encloses and protects the eye and its appendages -- 
                    also called eye socket, orbital cavity.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Pancreas
                </Text>
                <Text style={styles.paragraph}>
                    A long gland that is located behind the stomach. The 
                    pancreas secretes digestive enzymes and the hormones 
                    insulin and glucagon.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Pelvis
                </Text>
                <Text style={styles.paragraph}>
                    The structure below the spine and above the leg; composed 
                    of the two hip bones one on each side and in front while 
                    the sacrum and coccyx complete it behind.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Radius
                </Text>
                <Text style={styles.paragraph}>
                    The bone on the thumb side of the forearm.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Spleen
                </Text>
                <Text style={styles.paragraph}>
                    The spleen is in the uppermost area of the left side of the 
                    abdomen, just under the diaphragm. It typically has 
                    attachments to the stomach, left kidney, and colon. The 
                    spleen plays a role in immunity against bacterial 
                    infections.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Tibia
                </Text>
                <Text style={styles.paragraph}>
                    The tibia is the larger of two long bones in the lower leg 
                    (between the knee and ankle). Sometimes called the shin 
                    bone.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Ulna
                </Text>
                <Text style={styles.paragraph}>
                    The bone on the little-finger side of the forearm that forms 
                    with the humerus at the elbow joint.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Vertebrae
                </Text>
                <Text style={styles.paragraph}>
                    Any segment (bone or cartilage) that makes up the spinal 
                    column that encloses the spinal cord.{"\n"}
                </Text>
                
            </View>
    );
  }
}

export default Anatomy;

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