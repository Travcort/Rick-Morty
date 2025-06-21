import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CardNew = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Fake Gradient Layer */}
      <View style={styles.gradientLayer} />
      
      {/* Content */}
      <View style={styles.cardContent}>
        <Text style={styles.title}>Keys to Success</Text>
        <Text style={styles.subtitle}>Best way to be success in your life.</Text>

        <View style={styles.line} />

        <View style={styles.listItem}><Text style={styles.listText}>✅ Set Clear Goals</Text></View>
        <View style={styles.listItem}><Text style={styles.listText}>✅ Stay Organized</Text></View>
        <View style={styles.listItem}><Text style={styles.listText}>✅ Continuous Learning</Text></View>
        <View style={styles.listItem}><Text style={styles.listText}>✅ Time Management</Text></View>
        <View style={styles.listItem}><Text style={styles.listText}>✅ Maintain a Positive Attitude</Text></View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Your Success</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 250,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    alignSelf: "center",
    marginVertical: 20,
  },
  gradientLayer: {
    ...StyleSheet.absoluteFillObject, // Stretches the view to cover the card
    backgroundColor: "rgba(0, 107, 179, 0.8)", // Dark blue as base
    opacity: 0.5, // Fake gradient effect
  },
  cardContent: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#004f7a",
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 12,
    color: "#d1d1d1",
    marginTop: 5,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#bbb",
    marginVertical: 10,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 2,
  },
  listText: {
    fontSize: 14,
    color: "#fff",
  },
  button: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9999,
    backgroundColor: "#00AEEF",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CardNew;
