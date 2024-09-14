import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "./MyText";
import Colors from "../constants/Colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  console.log(netInfo);

  if (netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <MyText style={styles.text}>No internet connection</MyText>
      </View>
    );
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Colors.primary,
    zIndex: 1,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  text: {
    color: Colors.white,
  },
});
