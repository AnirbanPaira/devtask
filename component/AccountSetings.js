import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import circularImage from "../assets/image.png"; // Replace with your circular image source

const AccountSettings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View style={styles.circularImageContainer}>
            <Image source={circularImage} style={styles.circularImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Marry Doe</Text>
            <Text style={styles.emailText}>Marry@gmail.com</Text>
          </View>
        </View>
        <View style={styles.randomTextContainer}>
          <Text style={styles.randomText}>
            It is a long established fact that a reader  sdhnkshdkj all int will be distracted by the readable
          </Text>
        </View>
        <View style={styles.dottedLine}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    maxWidth: 400,
    borderColor: "#939496",
    borderWidth: 1,
    padding: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circularImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    alignSelf: "center",
  },
  circularImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginLeft: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 16,
  },
  randomTextContainer: {
    marginTop: 20,
  },
  randomText: {
    color: "grey",
    fontSize: 16,
  },
  dottedLine: {
    borderTopWidth: 1,
    borderColor: "grey",
    marginVertical: 20,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1,
  },
});

export default AccountSettings;
