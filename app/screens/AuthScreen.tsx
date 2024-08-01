import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Login from "./LoginScreen";
import Register from "./RegisterScreen";
import ForgotPassword from "./ForgotPasswordScreen";
import Colors from "../../constants/Colors";

const AuthScreen: React.FC = () => {
  const [screen, setScreen] = useState("login");

  const renderScreen = () => {
    switch (screen) {
      case "login":
        return <Login onSwitch={setScreen} />;
      case "register":
        return <Register onSwitch={setScreen} />;
      case "forgotPassword":
        return <ForgotPassword onSwitch={setScreen} />;
      default:
        return <Login onSwitch={setScreen} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.background,
  },
});

export default AuthScreen;
