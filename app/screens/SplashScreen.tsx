import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../config/firebaseConfig"; // firebaseConfig dosyasını doğru şekilde içe aktardığınızdan emin olun
import Colors from "../../constants/Colors";

const SplashScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          router.replace("/home");
        } else {
          router.replace("/login");
        }
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
