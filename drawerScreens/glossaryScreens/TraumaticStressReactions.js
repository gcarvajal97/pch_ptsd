import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class TraumaticStressReactions extends Component {

  render() {
    return (
            <View>
       			
       			<Text style={styles.paragraphBold}>
                    Acute Stress Disorder (ASD)
                </Text>
                <Text style={styles.paragraph}>
                    Severe traumatic stress symptoms that develop within one month 
                    of exposure to a traumatic event or experience. ASD symptoms 
                    include dissociative symptoms (i.e. feeling emotionally numb or 
                    in a daze), re-experiencing the event (i.e. intrusive thoughts 
                    or flashbacks), avoiding things that set off feelings about the 
                    trauma, and hyperarousal (i.e. startling easily, being 
                    hyper-vigilant). Acute stress disorder is diagnosed when 
                    symptoms last for at least 2 days and get in the way of normal 
                    functioning. If symptoms last for more than 4 weeks, see 
                    posttraumatic stress disorder.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Avoidance
                </Text>
                <Text style={styles.paragraph}>
                    A term used to describe traumatic stress symptoms that involve 
                    wanting to stay away from people, places, or activities 
                    because they remind one of the traumatic event. Avoidance can 
                    also include strong or excessive efforts to not think about or 
                    talk about the traumatic event.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    DSM-IV (Diagnostic and Statistical Manual of Mental Disorders, 
                    Fourth Edition)
                </Text>
                <Text style={styles.paragraph}>
                    The official manual of mental health problems used by 
                    psychiatrists, psychologists, and other mental health providers 
                    to understand and diagnose mental health problems. Insurance 
                    companies and health care providers also use terms and 
                    definitions in this book when discussing mental health 
                    issues.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Evidence-based practices, or empirically-supported treatments
                </Text>
                <Text style={styles.paragraph}>
                    Practices, including medical and psychological treatments 
                    and therapies, which have been clearly researched and found 
                    to be supported by scientific evidence or proof.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Hyperarousal
                </Text>
                <Text style={styles.paragraph}>
                    A term used to describe traumatic stress symptoms that can 
                    include startling easily, hypervigilance, difficulties falling 
                    or staying asleep, and trouble concentrating.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Hypervigilant
                </Text>
                <Text style={styles.paragraph}>
                    Feeling “on alert” or afraid much of the time, or overly 
                    sensitive to trauma reminders and prone to interpret them 
                    as danger signals (even in safe situations).{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Posttraumatic stress disorder (PTSD)
                </Text>
                <Text style={styles.paragraph}>
                    Severe traumatic stress symptoms that develop, and persist, 
                    after exposure to a traumatic event or experience. PTSD 
                    symptoms include re-experiencing the event (i.e. via intrusive 
                    thoughts or flashbacks), avoiding things that set off feelings 
                    about the trauma, and hyperarousal (i.e. startling easily, 
                    being hypervigilant). PTSD is diagnosed when these symptoms 
                    last for more than one month, cause significant distress, and 
                    get in the way of normal life.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Re-experiencing
                </Text>
                <Text style={styles.paragraph}>
                    A term used to describe traumatic stress symptoms that include 
                    upsetting intrusive thoughts, having nightmares or flashbacks, 
                    or becoming upset or having physical reactions to trauma 
                    reminders.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Trauma
                </Text>
                <Text style={styles.paragraph}>
                    In medical settings, the term “trauma” can have several 
                    different meanings. Medical professionals use “trauma” to refer 
                    to physical injury. Mental health professionals often use 
                    “trauma” to refer to an extremely frightening event or the 
                    psychological effects of experiencing such an event.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Trauma reminders
                </Text>
                <Text style={styles.paragraph}>
                    People, places, activities or other things that bring back 
                    memories of a traumatic experience. Trauma reminders can 
                    make people feel upset, fearful, or put them “on alert”.{"\n"}
                </Text>
                
            </View>
    );
  }
}

export default TraumaticStressReactions;

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