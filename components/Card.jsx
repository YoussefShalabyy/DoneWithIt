import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import MyText from "../components/MyText";
import { Link } from "expo-router";

const Card = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <Link
      href={{
        pathname: "../details/[id]",
        params: { title, subTitle, imageUrl },
      }}
      asChild
    >
      <Pressable style={styles.container} onPress={onPress}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <MyText style={styles.title}>{title}</MyText>
          <MyText style={styles.subTitle}>${subTitle}</MyText>
        </View>
      </Pressable>
    </Link>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#eee",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    paddingBottom: 5,
  },
  subTitle: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
});
