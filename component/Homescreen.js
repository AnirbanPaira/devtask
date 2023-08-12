import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";

const Homescreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login Screen');
  };

  const handleacreateAccount=()=>{
    navigation.navigate('Signup Screen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textheader}>Welcome to PopX</Text>
        <Text style={styles.innertext}>
          It is a long established fact that a reader will be distracted by the readable 
        </Text>
        <View style={styles.buttonscontainer}>
          <TouchableOpacity style={styles.firstbutton} onPress={handleacreateAccount}>
            <Text style={styles.textfirstbuttton}>
                Create Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondbutton} onPress={handlePress}>
            <Text style={styles.textsecondbutton}>
                Already Registered?Login
            </Text>
          </TouchableOpacity>

          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    marginBottom: 70,
  },
  content: {
    width: "100%", // Set the width to 100% to take full width
    maxWidth: 400, // Limit the max width if needed
  },
  textheader: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  innertext: {
    color: "grey",
    fontSize: 20,
    marginBottom: 20,
  },
  buttonscontainer: {
    marginTop: 20,
  },
  firstbutton: {
    backgroundColor: "#242f78",
    borderRadius: 10,
    height:50,
  },
  textfirstbuttton: {
    color: "#fff",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    height: 40,
    paddingTop: 12,
  },
  secondbutton: {
    backgroundColor: "#6e80f0",
    borderRadius: 10,
    marginTop: 10,
    height:50
  },
  textsecondbutton: {
    color: "#000",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    height: 40,
    paddingTop: 12,
  },
});


export default Homescreen;
