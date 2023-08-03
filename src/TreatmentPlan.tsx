import { Text, View, StyleSheet } from "@react-pdf/renderer";

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
});

const TreatmentPlan: React.FC = () => {
  return (
    <div>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>TREATMENT PLAN</Text>
        <View style={{ flex: 1 }}></View>
      </View>
    </div>
  );
};
export default TreatmentPlan;
