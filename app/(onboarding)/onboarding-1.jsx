import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function Onboarding1() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.illustrationContainer}>
        <Image source={require("../../assets/images/onboarding-1-illustration.png")} style={styles.illustration} resizeMode="contain" />
      </View>
      
      <Text style={styles.title}>Welcome to Signease –{"\n"}Connect through signs!</Text>
      <Text style={styles.subtitle}>Giving communication more flexible.</Text>
      
      <Pressable style={styles.button} onPress={() => router.push("/(onboarding)/onboarding-2")}>
        <Text style={styles.buttonText}>Get started</Text>
      </Pressable>
      
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  illustrationContainer: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  illustration: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.text.primary,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text.secondary,
    textAlign: "center",
    marginBottom: 40,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: Colors.button.primary,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    minWidth: 200,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: Colors.button.text,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  pagination: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.text.secondary,
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.text.primary,
  },
});


