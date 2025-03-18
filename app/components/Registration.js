import React from "react";
import { View, TextInput, StyleSheet, ScrollView, useWindowDimensions } from "react-native";

const UserForm = () => {
  const { width } = useWindowDimensions(); // Get the current screen width

  const isSmallScreen = width < 400; // Adjust breakpoint as needed

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* First Row */}
      <View style={[styles.row, isSmallScreen && styles.column]}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
      </View>

      {/* Second Row */}
      <View style={[styles.row, isSmallScreen && styles.column]}>
        <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Birth Date" />
      </View>

      {/* Third Row */}
      <View style={[styles.row, isSmallScreen && styles.column]}>
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="State" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    flexDirection: "column", // Changes layout to vertical on small screens
  },
  input: {
    flex: 1,
    minWidth: "30%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default UserForm;
