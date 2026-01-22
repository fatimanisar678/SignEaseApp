import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function onLogin() {
    // Simple validation: username = "admin", password = "123"
    if (email.toLowerCase().trim() === "admin" && password === "123") {
      router.replace("/(tabs)");
    } else {
      Alert.alert("Invalid Credentials", "Username: admin\nPassword: 123");
    }
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
        <Text style={styles.title}>WELCOME BACK</Text>
        <Text style={styles.subtitle}>SIGN IN</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email or Username"
            placeholderTextColor={Colors.text.placeholder}
            autoCapitalize="none"
            keyboardType="email-address"
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

        <Pressable onPress={() => {}} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>forgot password?</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </Pressable>

        <View style={styles.signupLink}>
          <Text style={styles.signupText}>Don't have account? </Text>
          <Pressable onPress={() => router.push("/(auth)/signup")}>
            <Text style={styles.signupLinkText}>Create one new?</Text>
          </Pressable>
        </View>
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
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text.primary,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "400",
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
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: Colors.text.secondary,
    fontSize: 14,
    textTransform: "lowercase",
  },
  button: {
    backgroundColor: Colors.button.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
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
  signupLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: Colors.text.secondary,
    fontSize: 14,
  },
  signupLinkText: {
    color: Colors.text.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});


