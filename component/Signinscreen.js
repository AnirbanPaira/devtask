import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";

const Signinscreen = ({navigation}) => {
  const hadlelogin = () => {
    console.log("Got login");
    navigation.navigate("Account Settings")
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = email !== "" && password !== "";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.contenttexts}>
          <Text style={styles.containertext}>Signin to your</Text>
          <Text style={styles.containertext}>PopX account</Text>
        </View>
        <Text style={styles.innertext}>
          It is a long established fact that a reader will be distracted by the
          readable
        </Text>
        <View style={styles.inputfields}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter email address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="gray"
            />
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Password"
              value={password}
              secureTextEntry
              onChangeText={setPassword}
              placeholderTextColor="gray"
            />
          </View>
          <Pressable
            onPress={hadlelogin}
            style={({ pressed }) => [
              styles.loginButton,
              {
                backgroundColor: isFormValid || pressed ? "#242f78" : "gray",
              },
            ]}
            disabled={!isFormValid}
          >
            <Text
              style={[
                styles.loginButtonText,
                { color: isFormValid ? "white" : "black" },
              ]}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    width: "100%",
    maxWidth: 400,
    borderColor: "#939496",
    borderWidth: 1,
    padding: 10,
  },
  containertext: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  contenttexts: {
    paddingTop: 20,
    margin: 10,
  },
  innertext: {
    color: "grey",
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: 10,
  },
  inputfields: {},
  label: {
    color: "#242f78",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  inputField: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginRight: 10,
    color: "black",
  },
  loginButton: {
    backgroundColor: "#242f78",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 220,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Signinscreen;
