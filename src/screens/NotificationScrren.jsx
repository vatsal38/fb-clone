import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";

const NotificationScrren = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontWeight: "500",
  },
});

export default NotificationScrren;
