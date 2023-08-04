import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Symptoms from "./Symptoms";
import Vitals from "./Vitals";
import TreatmentPlan from "./TreatmentPlan";
import MedicalHistory from "./MedicalHistory";
import Summary from "./Summary";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9fffc",
    borderRadius: 20, 
    padding: 10,
    width: "90%", 
    height: 150,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9fffc",
    borderRadius: 20, 
    padding: 10,
    width: "90%",
    height: 80,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue",
  },
  info: {
    marginTop: 10,
    fontSize: 12,
  },
  circleContainer: {
    width: 90,
    height: 90,
    marginLeft: 100,
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 60,
  },
  additionalInfo: {
    marginTop: 10,
    fontSize: 12,
  },
  horizontalLine: {
    borderTopWidth: 3,
    width:"80%",
    borderColor: "blue",
    marginTop: 20,
    marginLeft: "auto",   
    marginRight: "auto", 
  },
});



const MyDocument = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 50,
            marginBottom: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Patient Medical Report
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 60 }}
        >
          <View style={styles.container}>
            <View>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UHID No: 1234 | Patient ID: 123</Text>
              <Text style={styles.info}>
                Admission Date: 11 May, 2023, 7:40 PM IST
              </Text>
              <Text style={styles.info}>
                Discharge Date : 25 June, 2023, 10:40 AM IST
              </Text>
              <Text style={styles.info}>
                Reason of Discharge: Patient fully recovered
              </Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <View style={styles.circleContainer}>
                <View style={styles.circle}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: "I DO.jpg",
                      
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 70, marginTop: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.additionalInfo}>Father Given Name</Text>
            <Text style={styles.additionalInfo}>Gender: Female</Text>
            <Text style={styles.additionalInfo}>Age: 30 Years 10 Months</Text>
            <Text style={styles.additionalInfo}>Weight: 60 kg</Text>
            <Text style={styles.additionalInfo}>Height: 5'7"</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.additionalInfo}>Email ID: test@gmail.com</Text>
            <Text style={styles.additionalInfo}>Contact: +91 123456789</Text>
            <Text style={styles.additionalInfo}>Address: Apartment Name,</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 60,
            marginTop: 20,
          }}
        >
          <View style={styles.container2}>
            <View style={{ flex: 1 }}>
              <Text style={styles.info}>Doctor Dr.Kanika</Text>
              <Text style={styles.info}>Department Cardiology</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.info}>Referred by</Text>
              <Text style={styles.info}>Dr.Name</Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <Symptoms/>
      </View>
    </Page>
    <Page size="A4">
        <Vitals/>
          <TreatmentPlan/>
    </Page>
    <Page size="A4">
      <MedicalHistory/>
    </Page>
    <Page size= "A4">
     <Summary/>
    </Page>
  </Document>
);
export default MyDocument;


