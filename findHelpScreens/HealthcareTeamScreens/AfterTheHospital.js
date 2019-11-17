import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AfterTheHospital extends Component {
  render() {
    return (
      <View>
        
        <Text style={styles.paragraph}>After your child is discharged from the Emergency Department or Hospital, they will need to
            follow up with their doctor and possibly other healthcare professionals to make sure that they are healing well.
            </Text>
            <Text style={styles.paragraph}>It would be helpful to go through the rest of this application before going to the doctor.
            This application allows you to rate your child's reactions and you can share these results with your doctor.
            </Text>

            <Text style={styles.paragraphTitle}>Working with the Health Care Team</Text>

            <Text style={styles.paragraph}>-Make sure to keep all of your appointments even if your child is feeling better.</Text>
            <Text style={styles.paragraph}>-Many parents like to keep all of their child's injury information together in a binder or folder. 
            In the front of the binder, keep a sheet with your child's diagnosis and all of the medicines that your child is taking. Keep a calendar with all of the appointments.
            </Text>
            <Text style={styles.paragraph}>-Keep a pad of paper around the house to write down questions for your doctor or other healthcare professional as you think of them. 
            Encourage your child to keep track of their questions too.
            </Text>
            <Text style={styles.paragraph}>-You are your child's most important advocate. Ssk how you can get involved in your child's care and when you can make decisions about treatment. 
            Let your health care team know if your child is in pain or is having other reactions that concern you or your child.
            </Text>
            <Text style={styles.paragraph}>-Make sure that you have a good phone number to call if you have questions. Also, ask what you should look for and when to call.</Text>
            <Text style={styles.paragraph}>-Ask for a summary of every visit to take with you, if possible.</Text>
            <Text style={styles.paragraph}>-If you find that you are missing a lot of work, you might want to look into obtaining Family Medical Leave. 
            In 1993, the federal government passed a law that allows families to take some time to care for family members without fear of losing their job.
            </Text>

            <Text style={styles.paragraphTitle}>Tips for helping your Child at follow-up visits</Text>

            <Text style={styles.paragraph}>1.) Tell your child about the appointment a few days in advance. Explain the reason for the visit, 
            using words your child can understand.
            </Text>
            <Text style={styles.paragraph}>2.) Answer questions simply and honestly.</Text>
            <Text style={styles.paragraph}>3.) Find out, in advance, if the visit will involve any painful or scary procedures. If so,</Text>
            <Text style={styles.paragraph}>4.) talk with your physician about how to prepare for these procedures and if any medicine should be given, in advance.</Text>
            <Text style={styles.paragraph}>5.) Let your child know you'll be there throughout the entire appointment unless your child wants some time to talk 
            with the physician or specialist alone.
            </Text>
            <Text style={styles.paragraph}>6.) Encourage your child's physician to ask your child questions directly. Encourage your child to ask the doctors and nurses questions.
            </Text>

        <Text style={styles.paragraphTitle}>Follow-up Visit: Resources for Families</Text>

        <Text style={styles.paragraph}>Most hospitals have staff who is experienced with helping other parents and caregivers in your situation.
        If you are upset, have questions about how to help your child, or just need to talk,
        please seek out someone at the hospital who is available to assist you and your family. This may be a:
          </Text>
        <Text style={styles.paragraphBold}>Social Worker</Text>
        <Text style={styles.paragraphBold}>Chaplain</Text>
        <Text style={styles.paragraphBold}>Mental health professional, such as a psychologist or psychiatrist</Text>
        <Text style={styles.paragraph}>Once your child has been discharged and you have returned home,
        come back to this application for more information on ways parents can help their children.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraphTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 3,
    color: '#2089DC'
  },
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
    marginLeft: 10
  }
});