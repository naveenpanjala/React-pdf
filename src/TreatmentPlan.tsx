import React from "react";
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
  timelineContainer: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
    width: "80%",
  },
  timelineRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    // alignItems: "center",
   
  },
  timelineTime: {
    fontSize: 10,
    color: "#333",
    // textAlign: "center"
  },
  timelineMedicine: {

    fontSize: 10,
    color: "#333",
  },
  underline: {
    borderBottom: "1px solid #ccc",
    marginBottom: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  
  },
  headerText2: {
    marginTop:10,
    fontSize: 10,
    color: "grey",
  },
});

const TreatmentPlan: React.FC = () => {
  const timelineData = [
    {
      date: "2023-08-08",
      time: "08:00 AM",
      medicine: "Medicine A",
      dose: "1-1-1",
      nurse: "Nurse ABC",
    },
    {
      date: "2023-08-08",
      time: "01:00 PM",
      medicine: "Medicine B",
      dose: "1-0-0",
      nurse: "Nurse XYZ",
    },
    {
      date: "2023-08-08",
      time: "09:00 PM",
      medicine: "Medicine C",
      dose: "1-1-0",
      nurse: "Nurse ABC",
    },
    {
      date: "2023-08-09",
      time: "06:00 PM",
      medicine: "Medicine C",
      dose: "1-1-0",
      nurse: "Nurse ABC",
    },
    {
      date: "2023-08-09",
      time: "09:00 PM",
      medicine: "Medicine C",
      dose: "1-1-0",
      nurse: "Nurse XYZ",
    },
  ];

  const formatDate = (dateStr: string | number | Date) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  let prevDate = "";

  return (
    <div>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>TREATMENT PLAN</Text>
        <View style={{ flex: 1 }}></View>
      </View>
        <View style={styles.timelineContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText2}>Date</Text>
          <Text style={styles.headerText2}>Time</Text>
          <Text style={styles.headerText2}>Medicine Name</Text>
          <Text style={styles.headerText2}>Dose</Text>
          <Text style={styles.headerText2}>Nurse Name</Text>
        </View>
        {timelineData.map((item, index) => {
          const formattedDate = formatDate(item.date);
          const showUnderline = prevDate !== formattedDate;
          prevDate = formattedDate;
          return (
            <View key={index}>
              {showUnderline && <View style={styles.underline} />}
              <View style={styles.timelineRow}>
                <View>
                  <Text style={styles.timelineTime}>{formattedDate}</Text>
                </View>
                <Text style={styles.timelineTime}>{item.time}</Text>
                <Text style={styles.timelineMedicine}>{item.medicine}</Text>
                <Text style={styles.timelineMedicine}>{item.dose}</Text>
                <Text style={styles.timelineMedicine}>{item.nurse}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </div>
  );
};

export default TreatmentPlan;