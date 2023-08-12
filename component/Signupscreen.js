import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView,Alert} from "react-native";
import { RadioButton } from "react-native-paper";

const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState(false);

  const isFormValid =
    email !== "" ||
    password !== "" ||
    fullname !== "" ||
    phoneNumber !== "" ||
    companyName !== "";

    const handleSignup = () => {
        if (!isFormValid) {
          Alert.alert("Fill All Fields", "Please fill all fields before creating an account.");
        } else {
          console.log("press enter");
          navigation.navigate('Account Settings');
        }
      };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTexts}>
          <Text style={styles.headerText}>Create your</Text>
          <Text style={styles.headerText}>PopX Account</Text>
        </View>
        <Text style={styles.innertext}>
          It is a long established fact that a reader will be distracted by the readable
        </Text>
        <View style={styles.inputFields}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter full name"
            value={fullname}
            onChangeText={setFullname}
            placeholderTextColor="gray"
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholderTextColor="gray"
          />
          <Text style={styles.label}>Company Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter company name"
            value={companyName}
            onChangeText={setCompanyName}
            placeholderTextColor="gray"
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter email address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="gray"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            placeholderTextColor="gray"
          />
          <Text style={styles.label}>Are you an agency?</Text>
          <View style={styles.radioContainer}>
            <RadioButton
              value="yes"
              status={isAgency ? "checked" : "unchecked"}
              onPress={() => setIsAgency(true)}
            />
            <Text>Yes</Text>
            <RadioButton
              value="no"
              status={!isAgency ? "checked" : "unchecked"}
              onPress={() => setIsAgency(false)}
            />
            <Text>No</Text>
          </View>
        </View>
        <View style={styles.signupContainer}>
        <Pressable
          onPress={handleSignup}
          style={({ pressed }) => [
            styles.signupButton,
            {
              backgroundColor: isFormValid || pressed ? "#242f78" : "gray",
            },
          ]}
          disabled={!isFormValid}
        >
          <Text
            style={[
              styles.signupButtonText,
              { color: isFormValid ? "white" : "black" },
            ]}
          >
            Create Account
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
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1, // Make the content flex
    flexDirection: 'column', // Set flexDirection to column
    width: "100%",
    maxWidth: 400,
    borderColor: "#939496",
    borderWidth: 1,
    padding: 10,
    // paddingBottom: 20,
  },
  contentTexts: {
    paddingTop: 20,
    margin: 10,
  },
  headerText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  signupContainer: {
    flex: 1,
    justifyContent: "flex-end",
    
  },
  innertext: {
    color: "grey",
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: 10,
  },
  inputFields: {},
  label: {
    color: "#242f78",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputField: {
    borderColor: "grey",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 8,
    marginRight: 10,
    padding: 8,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  signupButton: {
    backgroundColor: "#242f78",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 20
  },
  signupButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupScreen;
