import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import MyText from "../../components/MyText";
import Screen from "../../components/Screen";
import ListItem from "../../components/lists/ListItem";
import Colors from "../../constants/Colors";

const Single = () => {
  const { title, subTitle, imageUrl } = useLocalSearchParams();
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <MyText style={styles.title}>{title}</MyText>
        <MyText style={styles.price}>{subTitle}</MyText>
      </View>
      <ListItem
        image={require("../../assets/images/usf.jpg")}
        title="Youssef Shalaby"
        subTitle="5 Listings"
      />
    </View>
  );
};

export default Single;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: Colors.secondary,
    marginVertical: 10,
    fontSize: 23,
  },
  title: {
    fontWeight: "500",
  },
});
