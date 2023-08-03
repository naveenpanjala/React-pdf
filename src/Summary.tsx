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
const Summary: React.FC = () => {
  return (
    <div>
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
        <Text style={{ fontSize: 12, marginTop: 50 }}>Diet</Text>
        <Text style={{ fontSize: 12, marginTop: 50, marginLeft: 200 }}>Follow up require</Text>
      </View>

    </div>
  );
};
export default Summary;
