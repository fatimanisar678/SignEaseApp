import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";

export default function HomeScreen() {
  const router = useRouter();
  const userName = "Fatima"; 

  const featureCards = [
    {
      id: 1,
      title: "Sign Language Translator",
      description: "Convert Signs into text & Speech",
      image: require("../../assets/images/feature-translator.png"),
    },
    {
      id: 2,
      title: "Learning Modules",
      description: "Learn alphabets, words & sentences",
      image: require("../../assets/images/feature-learning.png"),
    },
    {
      id: 3,
      title: "AI Tutor",
      description: "Get real-time guidance & corrections",
      image: require("../../assets/images/feature-ai-tutor.png"),
    },
    {
      id: 4,
      title: "Practice & Progress",
      description: "Practice signs & improvements",
      image: require("../../assets/images/feature-progress.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.welcomeText}>Welcome, {userName}</Text>
          <Text style={styles.headerTitle}>Learn & communicate through signs</Text>
        </View>
        <Pressable style={styles.searchButton}>
          <Ionicons name="search" size={24} color={Colors.text.primary} />
        </Pressable>
      </View>

      {/* Hero Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>Your sign language journey starts here.</Text>
            <Text style={styles.bannerSubtitle}>Learn. Practice. Communicate.</Text>
            <Pressable style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Try live translator</Text>
            </Pressable>
          </View>
          <View style={styles.bannerIllustration}>
            <Image source={require("../../assets/images/home-banner.png")} style={styles.bannerImage} resizeMode="contain" />
          </View>
        </View>
      </View>

      {/* For You Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>For You</Text>
        <Pressable>
          <Text style={styles.seeAllText}>See all</Text>
        </Pressable>
      </View>

      {/* Feature Cards Grid */}
      <View style={styles.cardsGrid}>
        {featureCards.map((card) => (
          <Pressable key={card.id} style={styles.card}>
            <View style={styles.cardImageContainer}>
              <Image source={card.image} style={styles.cardImage} resizeMode="contain" />
            </View>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </Pressable>
        ))}
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
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  headerLeft: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text.primary,
    lineHeight: 32,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.card.background,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
  banner: {
    backgroundColor: Colors.banner.background,
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  bannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bannerText: {
    flex: 1,
    marginRight: 16,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.background,
    marginBottom: 8,
    lineHeight: 28,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: Colors.background,
    marginBottom: 16,
  },
  bannerButton: {
    backgroundColor: Colors.background,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    color: Colors.banner.background,
    fontWeight: "700",
    fontSize: 14,
  },
  bannerIllustration: {
    width: 150,
    height: 150,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text.primary,
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.text.secondary,
    fontWeight: "600",
  },
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 24,
    marginBottom: 32,
    gap: 16,
  },
  card: {
    width: "47%",
    backgroundColor: Colors.card.background,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardImageContainer: {
    width: "100%",
    height: 120,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text.primary,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: Colors.text.secondary,
    lineHeight: 18,
  },
});
