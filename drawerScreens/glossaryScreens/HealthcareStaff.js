import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,} from 'react-native';

class HealthcareStaff extends Component {

  render() {
    return (
            <View>
       			
       			<Text style={styles.paragraphBold}>
                    Advanced Practice Nurse or Nurse Practitioner
                </Text>
                <Text style={styles.paragraph}>
                    This nurse has advanced training, education, and knowledge 
                    in specialty areas. They work closely with the attending 
                    physician and primary nurse to help coordinate your child’s 
                    care before, during and after hospitalization.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Attending Physician
                </Text>
                <Text style={styles.paragraph}>
                    A senior member of the hospital’s medical or surgical staff 
                    who is responsible for your child’s treatment.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Case Manager
                </Text>
                <Text style={styles.paragraph}>
                    Can assist families in planning for discharge to home or 
                    another healthcare facility.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Chaplain 
                </Text>
                <Text style={styles.paragraph}>
                    Chaplain provides pastoral visitation, sacramental ministry, 
                    and support. Often times hospitals have spiritual coordinators 
                    from various faiths.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Consultant
                </Text>
                <Text style={styles.paragraph}>
                    An expert doctor may be asked by your child’s attending 
                    physician to help diagnose and treat your child.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Dietitian
                </Text>
                <Text style={styles.paragraph}>
                    The dietitian will assess your child’s nutritional needs, make 
                    a plan to meet those needs, and assist families in choosing 
                    a healthy lifetime diet.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Fellow
                </Text>
                <Text style={styles.paragraph}>
                    A physician who has completed resident training and is now 
                    training in a special field of pediatrics, surgery, or other 
                    specialty.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Nurse Manager
                </Text>
                <Text style={styles.paragraph}>
                    A nurse who supervises and manages a patient care 
                    unit/area.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Occupational Therapist (OT)
                </Text>
                <Text style={styles.paragraph}>
                    The occupational therapist helps a child recover from an 
                    injury and reach their highest level of physical and social 
                    function. Occupational therapists teach patients how to perform 
                    activities of daily living such as dressing, bathing, and 
                    feeding. The therapist may help the family to make their home 
                    easier for the patient to live in and use.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Physiatrist
                </Text>
                <Text style={styles.paragraph}>
                    A medical doctor who specializes in physical medicine and 
                    rehabilitation whose primary responsibility is the medical 
                    care of the patient. After your child is medically stable and 
                    starts the rehab program, the physiatrist coordinates the 
                    work of the health care team by directing therapy services 
                    and ordering medication, braces, wheelchair, etc.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Physical Therapist (PT)
                </Text>
                <Text style={styles.paragraph}>
                    The physical therapist helps a child recover from an injury. 
                    He teaches patients to do as much for themselves as possible. 
                    This involves evaluating patients’ needs and then starting 
                    exercises to increase muscle strength and joint movement. 
                    Patients are taught how to move in bed, how to transfer from 
                    one place to another, and how to operate a wheelchair. If 
                    possible, the physical therapist may also teach patients to 
                    walk again; using whatever equipment is most helpful.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Primary Nurse
                </Text>
                <Text style={styles.paragraph}>
                    This nurse is responsible for planning and coordinating 
                    your child’s care throughout the entire hospital stay.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Psychiatrist
                </Text>
                <Text style={styles.paragraph}>
                    Licensed physicians (M.D. or D.O.) who specialize in 
                    the evaluation, diagnosis, and treatment of mental 
                    disorders. Their medical and psychiatric training prepares 
                    them to provide individual, family, and group treatment. 
                    Child psychiatrists have additional years of training in 
                    diagnosis and treatment of children and adolescents. 
                    Psychiatrists can prescribe medications, if needed.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Psychologist
                </Text>
                <Text style={styles.paragraph}>
                    Licensed practitioners (Ph.D. or Psy.D.) who specialize 
                    in the evaluation, diagnosis and treatment of behavioral 
                    and emotional problems and disorders. Their training 
                    in emotional and cognitive processes, human development, 
                    and behavior change prepares them to provide individual, 
                    family, and group treatment . Child and pediatric 
                    psychologists have specialized training in the treatment 
                    of children and adolescents.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Resident
                </Text>
                <Text style={styles.paragraph}>
                    A physician who is receiving advanced training in the 
                    hospital. A resident cares under the direction of the 
                    attending physician.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Respiratory Therapist (RT)
                </Text>
                <Text style={styles.paragraph}>
                    A respiratory therapist will assess a patient’s breathing. 
                    He/she provides treatment ordered by the physician and 
                    teaches the patient and family about ongoing respiratory 
                    care needs.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Social Worker
                </Text>
                <Text style={styles.paragraph}>
                    This professional helps adjust to illness, and can advise 
                    you about insurance, financial resources, and community 
                    agencies that can help with needs such as respite care, 
                    counseling, parent support groups, and home care.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Speech and Language Pathologist
                </Text>
                <Text style={styles.paragraph}>
                    The speech pathologist helps a child recover from an injury 
                    that makes it hard for a child to speak. She evaluates 
                    patients for cognitive and communication problems, and starts 
                    therapy as needed. Patients may have trouble saying what they 
                    want and need. They may have slurred speech from weak muscles. 
                    The speech pathologist helps to improve this. He/she can also 
                    suggest communication tools that will help.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Student
                </Text>
                <Text style={styles.paragraph}>
                    If you are at a teaching hospital, you may meet medical or 
                    nursing students as part of your child’s treatment. They are 
                    closely supervised by fully trained and licensed doctors or 
                    nurses.{"\n"}
                </Text>
                
            </View>
    );
  }
}

export default HealthcareStaff;

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
