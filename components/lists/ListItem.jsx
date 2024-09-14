import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MyText from "../MyText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {IconComponent}
      {image && <Image source={image} style={styles.image} />}
      <View style={{ flex: 1 }}>
        <MyText style={styles.title} numberOfLines={1}>
          {title}
        </MyText>
        {subTitle && (
          <MyText style={{ color: "#606060" }} numberOfLines={2}>
            {subTitle}
          </MyText>
        )}
      </View>
      <MaterialCommunityIcons name="chevron-right" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: Colors.light,
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
