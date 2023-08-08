import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import brainIcon from "../public/medicalCondition/health1.png";
import headIcon from "../public/medicalCondition/health2.png";
import chestIcon from "../public/medicalCondition/health3.png";
import heartIcon from "../public/medicalCondition/health4.png";
import boneIcon from "../public/medicalCondition/health5.png";
import tobacoIcon from "../public/medicalCondition/tobbaco.png";
import drugIcon from "../public/medicalCondition/drugs.png";
import alcoholIcon from "../public/medicalCondition/whiskey1.png";
import lumpsIcon from "../public/medicalCondition/lumps.png";
import cancerIcon from "../public/medicalCondition/cancer.png";
import surgeryIcon from "../public/medicalCondition/SURGERY1.png";

const styles = StyleSheet.create({
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
  icon: {
    height: 20,
    width: 20,
  },
  icon2: {
    height: 30,
    width: 30,
  },
  container1: {
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
  container2: {
    alignItems: "flex-start",
    marginTop: 10,
    marginLeft: 10,
    // flexDirection: "row",
    backgroundColor: "#e1faf8",
    borderRadius: 20,
    padding: 10,
    width: 220,
    // width: "auto",
    height: "auto",
  },
  container3: {
    // alignItems: "flex-start",
    marginTop: 10,
    // flexDirection: "row",
    backgroundColor: "#e1faf8",
    borderRadius: 20,
    padding: 10,
    width: 250,
    // width: "auto",
    height: 100,
  },
  container4: {
    alignItems: "flex-start",
    flexDirection: "row",
    // width: "auto",
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#f5e4f3",
    borderRadius: 20,
    padding: 10,
    width: 220,
    height: 100,
  },
  container5: {
    // alignItems: "flex-start",
    marginTop: 10,
    // flexDirection: "row",
    backgroundColor: "#faeede",
    borderRadius: 20,
    padding: 10,
    width: 250,
    // width: "auto",
    height: 100,
  },
  container6: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#f5e4f3",
    borderRadius: 20,
    padding: 10,
    width: 220,
    height: 100,
  },
  bullet: {
    marginRight: 5,
    fontSize: 12,
  },
});
const Summary: React.FC = () => {
  const dietList = [
    "Protein-rich foods",
    "Leafy vegetables",
    "Fruits",
    "Whole grains",
    "Healthy fats",
  ];

  const followUpDates = ["2023-08-10", "2023-08-15", "2023-08-20"];
  return (
    <div>
      <View style={{ flexDirection: "row", marginLeft: 60 }}>
        <View style={styles.container1}>
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image style={styles.icon} src={headIcon} />
              <Text style={{ fontSize: 10 }}>Any Mental Health Problems?</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image style={styles.icon} src={chestIcon} />
              <Text style={{ fontSize: 10 }}>Chest</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image style={styles.icon} src={heartIcon} />
              <Text style={{ fontSize: 10 }}>Heart</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image style={styles.icon} src={boneIcon} />
              <Text style={{ fontSize: 10 }}>Any bone/Joint Disease?</Text>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
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
                <Text style={{ fontSize: 10, textAlign: "center" }}>Drugs</Text>
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
      <View style={{ flexDirection: "row", marginLeft: 60 }}>
        <View style={styles.container3}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginTop: 5 }}>Lumps {"\n"} Found?</Text>
            <Image style={styles.icon2} src={lumpsIcon} />
          </View>
        </View>

        <View style={styles.container4}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.icon} src={surgeryIcon} />
            <View>
              <Text style={{ fontSize: 10, marginRight: 5 }}>
                Any Self Prescribed Drugs/Medicines?
              </Text>
              <Text style={{ fontSize: 8, marginBottom: 5 }}>
                (including pain killers or recreational drugs)*
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.bullet}>•</Text>
                <Text style={{ fontSize: 10, marginLeft: 5 }}>No</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 60 }}>
        <View style={styles.container5}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginTop: 5 }}>Been Through {"\n"} Cancer?</Text>
            <Image style={styles.icon2} src={cancerIcon} />
          </View>
        </View>
        <View style={styles.container6}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginTop: 5 }}>Pregnant/Been {"\n"} Pregnant?</Text>
          </View>
        </View>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.headerText}> DISCHARGE SUMMARY</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 60 }}
      >
        <Text style={{ fontSize: 12, marginTop: 12 }}>Advice on Discharge</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 10,
            color: "grey",
            marginTop: 10,
            marginLeft: 60,
            marginRight: 50,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 60 }}
      >
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 12, marginTop: 50 }}>Diet</Text>
          {dietList.map((item, index) => (
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              key={index}
            >
              <Text style={styles.bullet}>•</Text>
              <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 5 }}>
                {item}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={{ fontSize: 12, marginTop: 50, marginLeft: 200 }}>
            Follow up require
          </Text>
          {followUpDates.map((date, index) => (
            <Text
              style={{ fontSize: 10, marginLeft: 200, marginTop: 5 }}
              key={index}
            >
              • {date}
            </Text>
          ))}
        </View>
      </View>
    </div>
  );
};
export default Summary;
