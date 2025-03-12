import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const insights = [
  { title: "Scan new", subtitle: "Scanned 483", icon: "📥", screen: "Scan" },
  { title: "Counterfeits", subtitle: "Counterfeited 32", icon: "⚠️" },
  { title: "Success", subtitle: "Checkouts 8", icon: "✅" },
  { title: "Directory", subtitle: "History 26", icon: "📅" },
];

import { NavigationProp } from "@react-navigation/native";

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      {/* Phần header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Text style={styles.name}>Quang Hung</Text>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
          style={styles.avatar}
        />
      </View>

      {/* Your Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => item.screen && navigation.navigate(item.screen)}
          >
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Explore More */}
      <Text style={styles.sectionTitle}>Explore More</Text>
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "gray",
  },
});
