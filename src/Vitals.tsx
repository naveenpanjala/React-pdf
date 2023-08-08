import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import pulseRateIcon from "../public/medicalCondition/ppulse_icon.png";
import temperatureIcon from "../public/medicalCondition/thermometer_icon.png";
import spo2Icon from "../public/medicalCondition/droplet_icon.png";
import bloodpressureIcon from "../public/medicalCondition/heart_icon.png";
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
  page: {
    flexDirection: "column",
    padding: 30,
  },
  vitalsContainer1: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  vitalsContainer2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  vitalBox1: {
    width: "30%",
    borderRadius: 10,
    borderColor: "#56abf5",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  vitalHeaderText1: {
    fontSize: 15,
    color: "#56abf5",
    fontWeight: "bold",
    marginBottom: 5,
  },
  vitalDes: {
    fontSize: 12,
  },
  vitalValue1: {
    fontSize: 12,
    color: "#56abf5",
    fontWeight: "bold",
  },
  vitalBox2: {
    width: "30%",
    borderRadius: 10,
    borderColor: "#f56993",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  vitalHeaderText2: {
    fontSize: 15,
    color: "#f56993",
    fontWeight: "bold",
    marginBottom: 5,
  },
  vitalValue2: {
    fontSize: 12,
    color: "#f56993",
    fontWeight: "bold",
  },
  vitalBox3: {
    width: "30%",
    borderRadius: 10,
    borderColor: "#60f7b3",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  vitalHeaderText3: {
    fontSize: 15,
    color: "#60f7b3",
    fontWeight: "bold",
    marginBottom: 5,
  },
  vitalValue3: {
    fontSize: 12,
    color: "#60f7b3",
    fontWeight: "bold",
  },
  vitalBox4: {
    width: "30%",
    borderRadius: 10,
    borderColor: "#ca79fc",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  vitalHeaderText4: {
    fontSize: 15,
    color: "#ca79fc",
    fontWeight: "bold",
    marginBottom: 20,
  },
  vitalValue4: {
    fontSize: 12,
    color: "#ca79fc",
    fontWeight: "bold",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 5,
  },
  alertTable: {
    marginTop: 20,
    width: "80%",
    marginLeft: 60,
    // borderWidth: 1,
    borderColor: "#d9fffc",
    padding: 5,
  },
  alertTableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#98f5eb",
    borderLeftWidth: 1,
  },
  alertTableHeader: {
    fontWeight: "bold",
    backgroundColor: "#b2f7f4",
    padding: 5,
    borderRightWidth: 1,
  },
  alertTableCell: {
    flex: 1,
    padding: 5,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#98f5eb",
  },
  icon: {
    width: "auto",
    height: 30,
    marginLeft: 40,
  },
});

const alerts = [
  { slNo: 1, time: "09:00 AM", temp: "38.5°C", alert: "Fever" },
  { slNo: 2, time: "10:30 AM", temp: "39.2°C", alert: "High Fever" },
  { slNo: 3, time: "02:15 PM", temp: "37.8°C", alert: "Normal" },
  { slNo: 4, time: "04:45 PM", temp: "38.9°C", alert: "Fever" },
  { slNo: 1, time: "09:00 AM", temp: "38.5°C", alert: "Fever" },
  { slNo: 2, time: "10:30 AM", temp: "39.2°C", alert: "High Fever" },
  { slNo: 3, time: "02:15 PM", temp: "37.8°C", alert: "Normal" },
  { slNo: 4, time: "04:45 PM", temp: "38.9°C", alert: "Fever" },
  { slNo: 1, time: "09:00 AM", temp: "38.5°C", alert: "Fever" },
  { slNo: 2, time: "10:30 AM", temp: "39.2°C", alert: "High Fever" },
  { slNo: 3, time: "02:15 PM", temp: "37.8°C", alert: "Normal" },
  { slNo: 4, time: "04:45 PM", temp: "38.9°C", alert: "Fever" },
   { slNo: 1, time: "09:00 AM", temp: "38.5°C", alert: "Fever" },

];

const Vitals: React.FC = () => {
  const firstTableAlerts = alerts.slice(0, 13);
  const remainingAlerts = alerts.slice(13);
  return (
    <div>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>VITALS</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      <View style={styles.vitalsContainer1}>
        <View style={styles.vitalBox1}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.vitalHeaderText1}>Pulse Rate</Text>
            <Image style={styles.icon} src={pulseRateIcon} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.vitalDes}>Average</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Minimum</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Maximum</Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.vitalValue1}>110bpm</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue1}>110bpm</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue1}>110bpm</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.vitalBox2}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.vitalHeaderText2}>Temperature</Text>
            <Image style={styles.icon} src={temperatureIcon} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.vitalDes}>Average</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Minimum</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Maximum</Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.vitalValue2}>76°Celsius</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue2}>56°Celsius</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue2}>80°Celsius</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.vitalsContainer2}>
        <View style={styles.vitalBox3}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.vitalHeaderText3}>Oxygen Saturation (SpO2)</Text>
            <Image style={styles.icon} src={spo2Icon} />
          </View>
          
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.vitalDes}>Average</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Minimum</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Maximum</Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.vitalValue3}>90%</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue3}>82%</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue3}>95%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.vitalBox4}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.vitalHeaderText4}>Blood Pressure</Text>
            <Image style={styles.icon} src={bloodpressureIcon} />
          </View>
         
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.vitalDes}>Average</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Minimum</Text>
              <View style={styles.underline}></View>
              <Text style={styles.vitalDes}>Maximum</Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.vitalValue4}>120/80 mm Hg</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue4}>120/80 mm Hg</Text>
                <View style={styles.underline}></View>
                <Text style={styles.vitalValue4}>120/80 mm Hg</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.alertTable}>
          <View style={styles.alertTableRow}>
            <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
              SL.No
            </Text>
            <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
              Time
            </Text>
            <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
              Temp
            </Text>
            <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
              Alert
            </Text>
          </View>
          {firstTableAlerts.map((alert, index) => (
            <View style={styles.alertTableRow} key={index}>
              <Text style={styles.alertTableCell}>{alert.slNo}</Text>
              <Text style={styles.alertTableCell}>{alert.time}</Text>
              <Text style={styles.alertTableCell}>{alert.temp}</Text>
              <Text style={styles.alertTableCell}>{alert.alert}</Text>
            </View>
          ))}
        </View>
      </View>
      {remainingAlerts.length > 0 && (
        <View >
          <View style={styles.alertTable}>
            <View style={styles.alertTableRow}>
              <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
                SL.No
              </Text>
              <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
                Time
              </Text>
              <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
                Temp
              </Text>
              <Text style={[styles.alertTableHeader, styles.alertTableCell]}>
                Alert
              </Text>
            </View>
            {remainingAlerts.map((alert, index) => (
              <View style={styles.alertTableRow} key={index}>
                <Text style={styles.alertTableCell}>{alert.slNo}</Text>
                <Text style={styles.alertTableCell}>{alert.time}</Text>
                <Text style={styles.alertTableCell}>{alert.temp}</Text>
                <Text style={styles.alertTableCell}>{alert.alert}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </div>
  );
};
export default Vitals;

