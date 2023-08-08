import { Text, Image, View, StyleSheet } from "@react-pdf/renderer";
import BloodIcon from "../public/medicalCondition/blood_icon.png";
import bloodpresserIcon from "../public/medicalCondition/blood_pressure_icon.png";
import surgeryIcon from "../public/medicalCondition/SURGERY1.png";
import tabletsIcon from "../public/medicalCondition/drugs3.png";
import allergies from "../public/medicalCondition/sneeze 1.png";
import hepatitisBIcon from "../public/medicalCondition/hepatitisB.png";
import hepatitisCIcon from "../public/medicalCondition/hepatitisC.png";
import hivIcon from "../public/medicalCondition/hiv1.png";
import fatherIcon from "../public/medicalCondition/father.png";
import motherIcon from "../public/medicalCondition/mother.png";
import siblingIcon from "../public/medicalCondition/sibling.png";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#d9fffc",
    borderRadius: 20,
    padding: 10,
    width: "auto",
    height: 130,
  },
  container2: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#faeede",
    borderRadius: 20,
    padding: 10,
    width: "auto",
    height: 130,
  },
  container3: {
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: "#f5e4f3",
    borderRadius: 20,
    padding: 10,
    width: 220,
    height: "auto",
  },
  container4: {
    alignItems: "flex-start",
    marginTop: 10,
    // flexDirection: "row",
    backgroundColor: "#faeede",
    borderRadius: 20,
    padding: 10,
    width: 250,
    // width: "auto",
    height: "auto",
  },
  container5: {
    alignItems: "flex-start",
    marginTop: 10,
    // flexDirection: "row",
    backgroundColor: "#faeede",
    borderRadius: 20,
    marginLeft: 10,
    padding: 10,
    width: 220,
    height: "auto",
  },
  container6: {
    marginTop: 10,
    // flexDirection: "row",
    // alignItems: "flex-start",
    backgroundColor: "#d9fffc",
    borderRadius: 20,
    padding: 10,
    width: 250,
    height: "auto",
  },
  container7: {
    marginTop: 10,
    marginLeft: 10,
    // flexDirection: "row",
    backgroundColor: "#f5e4f3",
    borderRadius: 20,
    padding: 10,
    width: 220,
    height: "auto",
  },
  container8: {
    alignItems: "flex-start",
    marginTop: 10,
    // flexDirection: "row",
    backgroundColor: "#d9fffc",
    borderRadius: 20,
    padding: 10,
    width: 250,
    // width: "auto",
    height: "auto",
  },
  container9: {
    alignItems: "flex-start",
    marginTop: 10,
    marginLeft: 10,
    // flexDirection: "row",
    backgroundColor: "#e1faf8",
    borderRadius: 20,
    padding: 10,
    width: 220,
    // width: "auto",
    height: 100,
  },
  container10: {
    alignItems: "flex-start",
    marginTop: 10,
    marginLeft: 10,
    // flexDirection: "row",
    backgroundColor: "#e1faf8",
    borderRadius: 20,
    padding: 10,
    width: 220,
    // width: "auto",
    height: 100,
  },


  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3c54f0",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
    marginTop: 20,
  },
  headerText: {
    fontSize: 12,
    color: "white",
  },
  greyline: {
    borderTopWidth: 1,
    width: "80%",
    borderColor: "grey",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    height: 20,
    width: 20,
  },
  icon2: {
    height: 30,
    width: 30,
    marginRight: 30,
  },
  bullet: {
    marginRight: 5,
    fontSize: 12,
  },
});

const medicineList = [
  "Medicine A",
  "Medicine B",
  "Medicine C",
  "Medicine D",
  "Medicine E",
  "Medicine A",
  "Medicine B",
  "Medicine C",
  "Medicine D",
  "Medicine E",
  "Medicine A",
  "Medicine B",
  "Medicine C",
  "Medicine D",
  "Medicine E",
  "Medicine A",
  "Medicine B",
  "Medicine C",
  "Medicine D",
  "Medicine E",
];
const medicineList1 = [
  "Medicine A",
  "Medicine B",
  "Medicine C",
  "Medicine D",
  "Medicine E",
  "Medicine A",
  "Medicine B",
  "Medicine C",
  "Medicine D",
  "Medicine E",
  "Medicine A",
];
const foodList = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Pineapple",
  "Mango",
  "Kiwi",
  "Peach"
];

const knownConditions = [
  "Diabetes",
  "Laparoscopic Surgery",
  "Diabetes",
  "Laparoscopic Surgery",
  "Diabetes",
];

const MedicalHistory: React.FC = () => {
  return (
    <div>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>MEDICAL HISTORY</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          fontSize: 12,
          color: "grey",
        }}
      >
        <Text style={{ width: 120 }}>History Given by</Text>
        <Text style={{ width: 120 }}>Mobile Number</Text>
        <Text style={{ width: 120 }}>Relation with patient</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          fontSize: 12,
        }}
      >
        <Text style={{ width: 120 }}>John Doe</Text>
        <Text style={{ width: 120 }}>+91 1234567890</Text>
        <Text style={{ width: 120 }}>Father</Text>
      </View>
      <View style={styles.greyline}></View>
      <View style={{ flexDirection: "row", marginLeft: 60 }}>
        <View style={styles.container}>
          <View>
            <Image src={BloodIcon} />
            <Text style={{ fontSize: 10 }}>Blood Group</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <View>
            <Image src={bloodpresserIcon} />
            <Text style={{ fontSize: 10 }}>Blood Pressure</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.icon} src={surgeryIcon} />
            <Text style={{ fontSize: 10 }}>
              Any Surgeries/Known Conditions In The Past?
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            {knownConditions.map((condition, index) => (
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
                key={index}
              >
                <Text style={styles.bullet}>•</Text>
                <Text style={{ fontSize: 10 }}>{condition}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 60 }}>
        <View style={styles.container4}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.icon} src={tabletsIcon} />
            <Text style={{ fontSize: 10, marginTop: 5 }}>
              Taking Any Prescribed Medicines
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            {medicineList.map((medicine, index) => (
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
                key={index}
              >
                <Text style={styles.bullet}>•</Text>
                <Text style={{ fontSize: 10 }}>{medicine}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.container5}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.icon} src={allergies} />
            <Text style={{ fontSize: 10, marginTop: 5 }}>
              Any Known Allergies
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginRight: 100 }}>
            <View style={{ fontSize: 10, marginTop: 10 }}>
              <Text>Food</Text>
              {foodList.map((food, index) => (
                <View
                  key={index}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text style={styles.bullet}>•</Text>
                  <Text style={{ fontSize: 10, marginLeft: 5 }}>{food}</Text>
                </View>
              ))}
              <Text style={{ marginTop: 10 }}>Medicine</Text>
              {medicineList1.map((medicine, index) => (
                <View
                  key={index}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text style={styles.bullet}>•</Text>
                  <Text style={{ fontSize: 10, marginLeft: 5 }}>
                    {medicine}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 60 }}
      >
        <View style={styles.container6}>
          <View>
            <Text style={{ fontSize: 10, marginTop: 5 }}>
              Any Known Infections?
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ marginRight: 10 }}>
                <Image style={styles.icon2} src={hepatitisBIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Hepatitis B
                </Text>
              </View>
              <View style={{ marginRight: 10 }}>
                <Image style={styles.icon2} src={hepatitisCIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Hepatitis C
                </Text>
              </View>
              <View>
                <Image style={styles.icon2} src={hivIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>HIV</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container7}>
          <View>
            <Text style={{ fontSize: 10, marginTop: 5 }}>
              Any Known Diseases In Family?
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ marginRight: 10 }}>
                <Image style={styles.icon2} src={fatherIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Father
                </Text>
              </View>
              <View style={{ marginRight: 10 }}>
                <Image style={styles.icon2} src={motherIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Mother
                </Text>
              </View>
              <View>
                <Image style={styles.icon2} src={siblingIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Siblings
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* <View
        style={{ flexDirection: "row", marginLeft: 60 }}
      >
        <View style={styles.container8}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 10 }}>Other Health Conditions</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={styles.icon} src={brainIcon} />
              <Text style={{ fontSize: 10 }}>
                Epilepsy or Neurological disorder?
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop: 20 }}>
              <Image style={styles.icon} src={headIcon} />
              <Text style={{ fontSize: 10 }}>
              Any Mental Health Problems?
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" ,marginTop: 20}}>
              <Image style={styles.icon} src={chestIcon} />
              <Text style={{ fontSize: 10 }}>
              Chest
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop: 20 }}>
              <Image style={styles.icon} src={heartIcon} />
              <Text style={{ fontSize: 10 }}>
              Heart
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop: 20 }}>
              <Image style={styles.icon} src={boneIcon} />
              <Text style={{ fontSize: 10 }}>
              Any bone/Joint Disease?
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container9}>
        <View>
            <Text style={{ fontSize: 10, marginTop: 5 }}>
              Any Known Diseases In Family?
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ marginRight: 10 }}>
                <Image style={styles.icon2} src={tobacoIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Tobacco
                </Text>
              </View>
              <View style={{ marginRight: 10 }}>
                <Image style={styles.icon2} src={drugIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Drugs
                </Text>
              </View>
              <View>
                <Image style={styles.icon2} src={alcoholIcon} />
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Alcohol
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginLeft: 60 }}
      >
          <View style={styles.container10}>
              <View>
              <Text style={{ marginTop: 5 }}>
              Lumps Found?
            </Text>
              </View>
              <View>
              <Image style={styles.icon2} src={lumpsIcon} />
              </View>
          </View>

        </View> */}
    </div>
  );
};
export default MedicalHistory;
