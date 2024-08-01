import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import TextInputComponent from "../../components/TextInputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import Colors from "../../constants/Colors";

const Register: React.FC<{ onSwitch: (screen: string) => void }> = ({
  onSwitch,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace({
        pathname: "/login",
        params: { email: email },
      });
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInputComponent
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInputComponent
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ButtonComponent title="Register" onPress={handleRegister} />
      <ButtonComponent
        title="Back to Login"
        onPress={() => onSwitch("login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default Register;
