import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import TextInputComponent from "../../components/TextInputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import Colors from "../../constants/Colors";

const ForgotPassword: React.FC<{ onSwitch: (screen: string) => void }> = ({
  onSwitch,
}) => {
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
      <TextInputComponent
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ButtonComponent title="Reset Password" onPress={handlePasswordReset} />
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

export default ForgotPassword;
