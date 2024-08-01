import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Colors from "../../constants/Colors";

const { width } = Dimensions.get("window");

interface RegisterProps {
  onSwitch: (screen: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSwitch("login");
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />
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

export default Register;
