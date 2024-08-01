import React from "react";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const IndexScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/screens/SplashScreen");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return null; // Boş ekran veya geçiş sırasında gösterilecek bir şey.
};

export default IndexScreen;
