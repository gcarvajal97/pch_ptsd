import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class HealthcareProcedures extends Component {

  render() {
    return (
            <View>
       			
       			<Text style={styles.paragraphBold}>
                    Bone Survey (Skeletal)
                </Text>
                <Text style={styles.paragraph}>
                    An X-ray of all the bones of the body; often done when 
                    medical staff are looking for fractures or tumor metastasis 
                    to the bones.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Computed Tomography Scan (CT or CAT Scan)
                </Text>
                <Text style={styles.paragraph}>
                    A diagnostic imaging procedure that uses a combination of 
                    x-rays and computer technology to produce cross sectional 
                    images (often called “slices”), both horizontally and 
                    vertically, of the body. A CT scan shows detailed images of 
                    any part of the body, including the bones, muscles, fat and 
                    organs. CT scans are more detailed than general x-rays.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Intravenous (IV)
                </Text>
                <Text style={styles.paragraph}>
                    Introducing a fluid into the bloodstream through a vein 
                    (usually in the patient’s forearm).{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Laparoscopy
                </Text>
                <Text style={styles.paragraph}>
                    A group of operations performed with the aid of a camera 
                    placed in the abdomen or belly.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Laparotomy
                </Text>
                <Text style={styles.paragraph}>
                    An operation of the abdomen through an incision (cut) in 
                    the skin.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Local Anesthesia
                </Text>
                <Text style={styles.paragraph}>
                    Anesthetic medicine injected into the site of the operation 
                    to temporarily numb that area.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Magnetic Resonance Imaging (MRI)
                </Text>
                <Text style={styles.paragraph}>
                    A diagnostic procedure that uses a combination of large magnets, 
                    radiofrequencies, and a computer to produce detailed images of 
                    organs and structures within the body.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Noninvasive Procedure
                </Text>
                <Text style={styles.paragraph}>
                    A diagnostic effort or treatment that does not require 
                    entering the body or puncturing the skin.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Ultrasound
                </Text>
                <Text style={styles.paragraph}>
                    A diagnostic imaging technique which uses high-frequency 
                    sound waves and a computer to create images of blood vessels, 
                    tissues, and organs. Ultrasounds are used to view internal 
                    organs as they function, and to assess blood flow through 
                    vessels.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    X-Rays
                </Text>
                <Text style={styles.paragraph}>
                    A diagnostic test that uses invisible electromagnetic energy 
                    beams to produce images of internal tissues, bones and organs 
                    onto film.{"\n"}
                </Text>
                
            </View>
    );
  }
}

export default HealthcareProcedures;

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