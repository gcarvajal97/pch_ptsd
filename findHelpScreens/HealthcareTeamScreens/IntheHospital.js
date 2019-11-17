import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bold } from 'ansi-colors';

export default class InTheHospital extends Component {
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>
        Aside from the injury itself, there are things about just being in the hospital that can be traumatic for children and parents.
        </Text>

        <Text style={styles.paragraphTitle}>Working with the Healthcare Team</Text>

        <Text style={styles.paragraph}>-Don't be afraid to ask questions. Some parents keep a pad of paper to write down their questions. 
            This way, when the health care team comes to examine your child, you will be prepared. If you don't understand the answer, 
            let the medical team know and ask, again. Ask your doctor to write down the name of your child's injuries.
            </Text>
            <Text style={styles.paragraph}>-Stay overnight with your child, if possible. Ask permission to be with your child during medical tests and procedures, if you want to be.
            </Text>
            <Text style={styles.paragraph}>-Be sure to let the medical team know of any pre-existing medical conditions, other special needs and fears, and allergies your child has, 
            as well as whatever you can tell them about how the injury happened.
            </Text>
            <Text style={styles.paragraph}>-You are your child's most important advocate. Ask how you can get involved in your child's care and when you can make decisions about treatment. 
            Let your health care team know if your child is in pain.
            </Text>
            <Text style={styles.paragraph}>-Take time for yourself. It is important to take breaks as often as you need them. Take a shower; make some phone calls; 
            get something to eat or drink; or go to the chapel to think or cry. Whatever it is that you need for yourself. After your break, 
            you will feel better able to support your child. Let your child's healthcare team know when you leave your child's bedside and when you return.
            </Text>
            <Text style={styles.paragraph}>-Make of list of what other people can do to help you. When people call and offer support, 
            you will have something concrete to ask. You do not need to do it all.
            </Text>
            <Text style={styles.paragraph}>-Ask the health care team to help you schedule all of your outpatient visits before you leave the hospital.
            </Text>
            <Text style={styles.paragraph}>-Make sure that your child's pain is under control before you leave the hospital.
            </Text>
            <Text style={styles.paragraph}>-Make sure that you have a good phone number to call if you have questions when you return home.</Text>
            <Text style={styles.paragraph}>-Ask for copies of your child's x-rays, CT scans, or MRI scans.</Text>
            
            <Text style={styles.paragraphTitle}>Tips for Supporting Your Child in the Hospital:</Text>

            <Text style={styles.paragraph}>1.) You are the best person to help your child.</Text>
            <Text style={styles.paragraph}>2.) Be patient with your child.</Text>
            <Text style={styles.paragraph}>3.) Help your child understand what is happening.</Text>
            <Text style={styles.paragraph}>4.) Make sure that you have a good phone number to call if you have questions when you return home.</Text>
            <Text style={styles.paragraph}>5.) Talk about your feelings together.</Text>
            <Text style={styles.paragraph}>6.) Help your child see the staff as helpers.</Text>
            <Text style={styles.paragraph}>7.) Stay with your child (or have a family member or friend stay) as much as possible.</Text>
            <Text style={styles.paragraph}>8.) Take care of yourself.</Text>
            <Text style={styles.paragraph}>9.) Bring things from home to make your child comfortable –  games, toys, and favorite books.</Text>

            <Text style={styles.paragraphTitle}>Tips for Supporting Your Teen in the Hospital</Text>

            <Text style={styles.paragraph}>Teens in the hospital have many of the same concerns, 
            but are better able than younger children to understand and participate in their treatment.</Text>

            <Text style={styles.paragraph}>1.)Be honest with your teen.</Text>
            <Text style={styles.paragraph}>2.)Include your teen in medical discussions when possible.</Text>
            <Text style={styles.paragraph}>3.)Encourage your teen's healthcare team to talk with your teen directly and let him answer his own questions.</Text>
            <Text style={styles.paragraph}>4.)They might want to talk alone with the doctors.</Text>
            <Text style={styles.paragraph}>5.)Remember that teens can be self-conscious, and they may worry about how they will look and fit in with others, 
                and about their privacy.
                </Text>
                <Text style={styles.paragraph}>6.)Help your teen stay connected with old friends, as well as make new friends in the hospital.</Text>
                <Text style={styles.paragraph}>7.)Bring things from home to make your teen more comfortable – bath robe, music, and magazines.</Text>
                <Text style={styles.paragraph}>8.)Call your their school to let them know what has happened.</Text>

            <Text style={styles.paragraphTitle}>Resources for Families</Text>

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
    textAlign:'left',
    fontSize: 14,
    marginVertical:2,
  },
  paragraphBold: {
    textAlign:'left',
    fontSize: 14,
    fontWeight:'bold',
    marginVertical:2,
    marginLeft:10
  }
});