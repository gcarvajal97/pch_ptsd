import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default class AfterTheHospital extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        After the hospital: Returning for follow up visit.
        
            After your child is discharged from the Emergency Department or Hospital, they will need to 
            follow up with their doctor and possibly other healthcare professionals to make sure that they are healing well.
            It would be helpful to go through the rest of this application before going to the doctor. 
            This application will allow you to rate your child's reactions and you can share these results with your doctor.

        Working with the Health Care Team AFTER the Hospital - Suggestions from Other Parents

            Make sure to keep all of your appointments even if your child is feeling better.
            Many parents like to keep all of their child's injury information together in a binder or folder. In the front of the binder, keep a sheet with your child's diagnosis and all of the medicines that your child is taking. Keep a calendar with all of the appointments.
            Keep a pad of paper around the house to write down questions for your doctor or other healthcare professional as you think of them. Encourage your child to keep track of her questions, too.
            You are your child's most important advocate – ask how you can get involved in your child's care and when you can make decisions about treatment. Let your health care team know if your child is in pain or is having other reactions that concern you or your child.
            Make sure that you have a good phone number to call if you have questions. Also, ask what you should look for and when to call.
            Ask for a summary of every visit to take with you, if possible.
            If you find that you are missing a lot of work, you might want to look into obtaining Family Medical Leave. In 1993, the federal government passed a law that allows families to take some time to care for family members without fear of losing their job.
        
        Tips for helping your Child at follow-up visits. Here are important tips to remember to help your child at follow-up visits.

            Tell your child about the appointment a few days in advance. Explain the reason for the visit, using words your child can understand. Answer questions simply and honestly.
            Find out, in advance, if the visit will involve any painful or scary procedures. If so, talk with your physician about how to prepare for these procedures and if any medicine should be given, in advance.
            Let your child know you'll be there throughout the entire appointment unless your child wants some time to talk with the physician or specialist alone. Encourage your child's physician to ask your child questions directly. Encourage your child to ask the doctors and nurses questions.
        
        At the Follow-up Visit: Resources for Families

            Most hospitals have staff who are experienced with helping other parents and caregivers in your situation. 
            If you are upset, have questions about how to help your child, about financial or insurance issues, or just need to talk, 
            please seek out someone at the hospital who is available to assist you and your family. This may be a:

                Social Worker
                Chaplain
                Or a mental health professional, such as a psychologist or psychiatrist come back to this website for more 
                information on ways parents can help their kids.


        </Text>
        </View>
    );
  }
}