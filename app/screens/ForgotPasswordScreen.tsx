import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import Colors from "../../constants/Colors";

const { width } = Dimensions.get("window");

interface ForgotPasswordProps {
  onSwitch: (screen: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onSwitch }) => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      onSwitch("login");
    } catch (error) {
      console.error("Password reset error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button title="Reset Password" onPress={handlePasswordReset} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back to Login" onPress={() => onSwitch("login")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: Colors.text,
  },
  input: {
    width: width * 0.8,
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginVertical: 10,
    width: width * 0.8,
  },
  link: {
    marginTop: 16,
    color: Colors.primary,
  },
});

export default ForgotPassword;
