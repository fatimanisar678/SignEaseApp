import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to onboarding after 2 seconds
    const timer = setTimeout(() => {
      router.replace("/(onboarding)/onboarding-1");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/splash-hands.jpg")} style={styles.handsImage} resizeMode="contain" />
        
      </View>
      <Text style={styles.title}>SignEase</Text>
      <Text style={styles.tagline}>Hands that talk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  handsImage: {
    width: 300,
    height: 100,
    marginBottom: -20,
  },
  arrowImage: {
    width: 200,
    height: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: Colors.text.primary,
    marginBottom: 16,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 20,
    color: Colors.text.primary,
    fontStyle: "italic",
    fontFamily: "serif",
  },
});


