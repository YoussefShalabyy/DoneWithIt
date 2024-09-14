import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons
        name="close"
        size={32}
        color="white"
        style={styles.closeIcon}
      />
      <SimpleLineIcons
        name="trash"
        size={32}
        color="white"
        style={styles.trashIcon}
      />

      <Image
        source={require("../../assets/images/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 55,
    left: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "#000",
  },
  trashIcon: {
    position: "absolute",
    top: 55,
    right: 30,
  },
});
