import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function onSignup() {
    
    router.replace("/(tabs)");
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subtitle}>SIGNUP</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Fatima Nisar"
            placeholderTextColor={Colors.text.placeholder}
            style={styles.input}
          />
          <Ionicons name="person-outline" size={20} color={Colors.text.secondary} style={styles.inputIcon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={Colors.text.placeholder}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.inputIcon}>
            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color={Colors.text.secondary} />
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.text.placeholder}
            secureTextEntry={!showConfirmPassword}
            style={styles.input}
          />
          <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.inputIcon}>
            <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color={Colors.text.secondary} />
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={onSignup}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.text.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text.primary,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "400",
    textTransform: "uppercase",
  },
  inputContainer: {
    position: "relative",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.input.border,
    borderRadius: 12,
    padding: 16,
    paddingRight: 50,
    color: Colors.text.primary,
    fontSize: 16,
    backgroundColor: Colors.input.background,
  },
  inputIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  button: {
    backgroundColor: Colors.button.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: Colors.button.text,
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
