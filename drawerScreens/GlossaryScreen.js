import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import NavigationService from '../components/NavigationService';

class GlossaryScreen extends Component {

    // Gives the NavBar a title for this specific screen
    static navigationOptions = {
        headerTitle: 'Glossary',
        headerLeft: (<View style={{ margin: 5 }}><Button
            onPress={()=>NavigationService.navigateDrawer('Home')}
            title='Back'></Button></View>)
    }

    render() {
        return (
            // renders the learn more screen
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>
                    Glossary
                </Text>
                
                <Text style={styles.paragraphTitle}>
                    {"\n"}Types of Injury{"\n"}
                </Text>
                
               
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
                
               
                <Text style={styles.paragraphTitle}>
                    Anatomy{"\n"}
                </Text>


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


                <Text style={styles.paragraphBold}>
                    Common Drugs / Treatments{"\n"}
                </Text>


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


                <Text style={styles.paragraphTitle}>
                    Healthcare Procedures{"\n"}
                </Text>


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


                <Text style={styles.paragraphTitle}>
                    Healthcare Staff{"\n"}
                </Text>


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


                <Text style={styles.paragraphTitle}>
                    Traumatic Stress Reactions{"\n"}  
                </Text>


                <Text style={styles.paragraphBold}>
                    Acute Stress Disorder (ASD)
                </Text>
                <Text style={styles.paragraph}>
                    Severe traumatic stress symptoms that develop within one month of exposure to a traumatic event or experience. ASD symptoms include dissociative symptoms (i.e. feeling emotionally numb or in a daze), re-experiencing the event (i.e. intrusive thoughts or flashbacks), avoiding things that set off feelings about the trauma, and hyperarousal (i.e. startling easily, being hyper-vigilant). Acute stress disorder is diagnosed when symptoms last for at least 2 days and get in the way of normal functioning. If symptoms last for more than 4 weeks, see posttraumatic stress disorder.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Avoidance
                </Text>
                <Text style={styles.paragraph}>
                    A term used to describe traumatic stress symptoms that involve wanting to stay away from people, places, or activities because they remind one of the traumatic event. Avoidance can also include strong or excessive efforts to not think about or talk about the traumatic event.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    DSM-IV (Diagnostic and Statistical Manual of Mental Disorders, Fourth Edition)
                </Text>
                <Text style={styles.paragraph}>
                    The official manual of mental health problems used by psychiatrists, psychologists, and other mental health providers to understand and diagnose mental health problems. Insurance companies and health care providers also use terms and definitions in this book when discussing mental health issues.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Evidence-based practices, or empirically-supported treatments
                </Text>
                <Text style={styles.paragraph}>
                    Practices, including medical and psychological treatments and therapies, which have been clearly researched and found to be supported by scientific evidence or proof.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Hyperarousal
                </Text>
                <Text style={styles.paragraph}>
                    A term used to describe traumatic stress symptoms that can include startling easily, hypervigilance, difficulties falling or staying asleep, and trouble concentrating.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Hypervigilant
                </Text>
                <Text style={styles.paragraph}>
                    Feeling “on alert” or afraid much of the time, or overly sensitive to trauma reminders and prone to interpret them as danger signals (even in safe situations).{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Posttraumatic stress disorder (PTSD)
                </Text>
                <Text style={styles.paragraph}>
                    Severe traumatic stress symptoms that develop, and persist, after exposure to a traumatic event or experience. PTSD symptoms include re-experiencing the event (i.e. via intrusive thoughts or flashbacks), avoiding things that set off feelings about the trauma, and hyperarousal (i.e. startling easily, being hypervigilant). PTSD is diagnosed when these symptoms last for more than one month, cause significant distress, and get in the way of normal life.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Re-experiencing
                </Text>
                <Text style={styles.paragraph}>
                    A term used to describe traumatic stress symptoms that include upsetting intrusive thoughts, having nightmares or flashbacks, or becoming upset or having physical reactions to trauma reminders.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Trauma
                </Text>
                <Text style={styles.paragraph}>
                    In medical settings, the term “trauma” can have several different meanings. Medical professionals use “trauma” to refer to physical injury. Mental health professionals often use “trauma” to refer to an extremely frightening event or the psychological effects of experiencing such an event.{"\n"}
                </Text>
                <Text style={styles.paragraphBold}>
                    Trauma reminders
                </Text>
                <Text style={styles.paragraph}>
                    People, places, activities or other things that bring back memories of a traumatic experience. Trauma reminders can make people feel upset, fearful, or put them “on alert”.{"\n"}
                </Text>
            </ScrollView>
            </View>
        );
    }
}
export default GlossaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'stretch',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        color: '#2089DC'
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'stretch',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        color: '#2089DC'
    },
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