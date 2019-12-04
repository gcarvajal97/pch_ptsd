import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TakingCareofCastScreen extends Component {
  render() {
    return (
      <View>
          <Text style={styles.paragraph}>A cast holds a broken bone in place while it heals. Casts also help to prevent or decrease muscle contractions and can help limit movement, especially after surgery.</Text>

          <Text style={styles.paragraph}>The outside of the cast is made from one of two types of casting materials:</Text>

          <Text style={styles.paragraph}>-Plaster – white in color</Text>
          <Text style={styles.paragraph}>-Fiberglass – comes in a variety of colors</Text>

          <Text style={styles.paragraph}>Cotton and other synthetic materials are used to line the inside of the cast to make it soft and to provide padding around bony areas, such as the wrist or elbow.</Text>

          <Text style={styles.paragraph}>Follow instructions provided by your healthcare provider (doctor or nurse practitioner) It is important that your child follow all of the special instructions given by your healthcare provider to make sure that the broken bone heals well. </Text>
          <Text style={styles.paragraphTitle}>Some things that your child's healthcare provider might suggest:</Text>
          <Text style={styles.paragraph}>-Keep the cast clean and dry. Do not get it wet in the shower or tub or swimming pool. Ask your doctor how you can buy a protective sleeve if you think your child might be somewhere where his cast might get wet. Check for cracks and breaks in the cast.</Text>
          <Text style={styles.paragraph}>-Check for rough edges. These rough edges can be padded to protect the skin from scratches.</Text>
          <Text style={styles.paragraph}>-Do not scratch the skin under the cast by inserting objects inside the cast – this can cut the skin.</Text>
          <Text style={styles.paragraph}>-If your child complains of itching, use a hairdryer placed on a cool setting to blow air under the cast. Never blow warm or hot air into the cast.</Text>
          <Text style={styles.paragraph}>-Do not put powders or lotions inside the cast.</Text>
          <Text style={styles.paragraph}>-Cover the cast while your child is eating to prevent food spills and crumbs from entering the cast.</Text>
          <Text style={styles.paragraph}>-Prevent small toys or objects from being put inside the cast.</Text>
          <Text style={styles.paragraph}>-Elevate the cast above the level of the heart to decrease swelling.</Text>
          <Text style={styles.paragraph}>-Encourage your child to move their fingers or toes to promote circulation.</Text>
          <Text style={styles.paragraph}>-Older children with body casts may need to use a bedpan or urinal in order to go to the bathroom.</Text>
          <Text style={styles.paragraph}>-Tips to keep body casts clean and dry and prevent skin irritation around the genital area include the following:</Text>
          <Text style={styles.paragraph}>{'\t'}-Use a diaper or sanitary napkin around the genital area to prevent leakage or splashing urine.</Text>
          <Text style={styles.paragraph}>{'\t'}-Place toilet paper inside the bedpan to prevent urine from splashing onto the cast or bed.</Text>
          <Text style={styles.paragraph}>{'\t'}-Keep the genital area as clean and dry as possible to prevent skin irritation.</Text>
                      
          <Text style={styles.paragraphTitle}>Bathing and Hair Washing</Text>
          <Text style={styles.paragraph}>-Your child may need to have sponge baths until the cast is removed.</Text>
          <Text style={styles.paragraph}>-How to wash your child's hair: Lay your child across a bed a place a bucket on the floor to catch the water as you shampoo. You can also get "no-rinse" shampoo at the drug store.</Text>
                  
          <Text style={styles.paragraphTitle}>Make sure to ask your healthcare provider:</Text>
          <Text style={styles.paragraph}>-How long will my child need to wear the cast?</Text>
          <Text style={styles.paragraph}>-What are the limits to my child's activity while they wear the cast?</Text>
          <Text style={styles.paragraph}>-What are the limits on my child's activity once you take off the cast?</Text>
          <Text style={styles.paragraph}>-When can my child return to school?</Text>
          <Text style={styles.paragraph}>-When can my child return to gym class? to contact sports? to biking? or to rough play?</Text>
          <Text style={styles.paragraph}>-Will my child need physical therapy?</Text>
          <Text style={styles.paragraph}>-Will this injury affect my child's growth?</Text>
                  
          <Text style={styles.paragraphTitle}>When to call your healthcare provider.</Text>
          <Text style={styles.paragraph}>Ask your healthcare provider for specific signs and symptoms that should alert you to call them right away. They may include the following:</Text>
          <Text style={styles.paragraph}>-Your child has increasing pain and pain medicine recommended or prescribed by your healthcare provider is not helping.</Text>
          <Text style={styles.paragraph}>-You see a change in the cast; cracking, softening, drainage from the inside.</Text>
          <Text style={styles.paragraph}>-You smell a bad odor coming from the cast.</Text>
          <Text style={styles.paragraph}>-Your child's fingers or toes are cold, blue/gray or swollen.</Text>
          <Text style={styles.paragraph}>-Your child feels numbness or tingling in the fingers or toes.</Text>
          <Text style={styles.paragraph}>-Your child cannot move their fingers or toes.</Text>
          <Text style={styles.paragraph}>-The cast is slipping off.</Text>
          <Text style={styles.paragraph}>-There is increased swelling above or below the cast.</Text>
          <Text style={styles.paragraph}>-The cast feels very tight.</Text>
          <Text style={styles.paragraph}>-If you have any other concerns.</Text>
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