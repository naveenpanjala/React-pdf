import {
  Text,
  View,
  StyleSheet,
  Page,
  Document,
  Image,
} from "@react-pdf/renderer";
import logoImage from "./../public/yantram_logo.png";

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 45,
    // marginBottom: 10,
    marginTop: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 12,
    // marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
  },
  prescriptionTable: {
    // marginTop: 20,
    borderColor: "#d9fffc",
    padding: 30,
  },
  prescriptionTableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#98f5eb",
    borderLeftWidth: 1,
  },
  prescriptionTableHeader: {
    flex: 1,
    fontSize: 8,
    backgroundColor: "#b2f7f4",
    padding: 5,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  prescriptionTableCell: {
    fontSize: 8,
    flex: 1,
    padding: 5,
    borderRightWidth: 1,
    borderColor: "#98f5eb",
  },
});
const Logo = () => <Image style={styles.logo} src={logoImage} />;
const prescriptions = [
  {
    type: "Tablet",
    medicineName: "Thyrocab",
    dailyQty: 1,
    timing: "1-0-1",
    when: "After Food",
    frequency: "Daily",
    duration: "10 days",
    notes: "Notes",
  },
  {
    type: "Tablet",
    medicineName: "Thyrocab",
    dailyQty: 1,
    timing: "1-0-1",
    when: "After Food",
    frequency: "Daily",
    duration: "10 days",
    notes: "Notes",
  },
  {
    type: "Tablet",
    medicineName: "Thyrocab",
    dailyQty: 1,
    timing: "1-0-1",
    when: "After Food",
    frequency: "Daily",
    duration: "10 days", 
    notes: "Notes ",
  },
];
const Prescription: React.FC = () => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.header}>
          <View style={{ marginLeft: 250 }}>
            <Logo />
          </View>
          {/* <Text>Prescription</Text> */}
        </View>
        <View>
          <View style={styles.prescriptionTable}>
            <View style={styles.prescriptionTableRow}>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                Type
              </Text>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                Medicine Name
              </Text>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                Daily Qty
              </Text>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                Timing
              </Text>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                When
              </Text>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                Frequency
              </Text>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                Duration
              </Text>
              <Text
                style={[
                  styles.prescriptionTableHeader,
                  styles.prescriptionTableCell,
                ]}
              >
                Notes
              </Text>
            </View>
            {prescriptions.map((prescription, index) => (
              <View style={styles.prescriptionTableRow} key={index}>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.type}
                </Text>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.medicineName}
                </Text>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.dailyQty}
                </Text>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.timing}
                </Text>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.when}
                </Text>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.frequency}
                </Text>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.duration}
                </Text>
                <Text style={styles.prescriptionTableCell}>
                  {prescription.notes}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <Text>YANTRAM MEDTECH</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Prescription;
