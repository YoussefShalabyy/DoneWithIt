import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "../../components/MyText";
import Colors from "@/constants/Colors";
import ListItem from "../../components/lists/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Image
        source={require("../../assets/images/jacket.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <MyText title="Red Jacket For Sale" style={styles.title} />
        <MyText title="100$" style={styles.price} />
      </View>
      <ListItem
        image={require("../../assets/images/usf.jpg")}
        title="Youssef Shalaby"
        subTitle="5 Listings"
      />
    </View>
  );
};

export default ListingDetailsScreen;

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
