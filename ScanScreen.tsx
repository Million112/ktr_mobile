import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function ScanScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Vùng Camera */}
      <View style={styles.cameraFrame}>
        <Image source={require("../assets/images/icon.png")} style={styles.productImage} />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image source={require("../assets/images/icon.png")} style={styles.productThumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.productOwner}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  cameraFrame: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 250,
    height: 400,
    resizeMode: "contain",
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  productThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  productOwner: {
    fontSize: 14,
    color: "gray",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
});
