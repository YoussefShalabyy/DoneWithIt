import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Screen from "../../components/Screen";
import ListItem from "@/components/lists/ListItem";
import Colors from "@/constants/Colors";
import Icon from "@/components/Icon";
import Seperator from "@/components/lists/Seperator";
import { router } from "expo-router";
import AuthContext from "../../auth/context";
import * as SecureStore from "expo-secure-store";
import authStorage from "../../auth/authStorage";
const Info = [
  {
    name: "My Listings",
    color: Colors.primary,
    iconName: "menu",
    target: "MyListings",
  },
  {
    name: "My Messages",
    color: Colors.secondary,
    iconName: "email",
    target: "/account/messages",
  },
];

const AccountScreen = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <Screen>
      <View style={{ marginTop: 30, marginBottom: 50 }}>
        <ListItem
          title={user?.name}
          subTitle={user?.email}
          image={require("../../assets/images/usf.jpg")}
        />
      </View>

      <View style={{ marginBottom: 40 }}>
        <FlatList
          ItemSeparatorComponent={() => <Seperator />}
          bounces={false}
          data={Info}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              IconComponent={
                <Icon name={item.iconName} backgroundColor={item.color} />
              }
              onPress={() => {
                console.log("t", item.target);
                router.navigate(item.target);
              }}
            />
          )}
        />
      </View>

      <ListItem
        title={"Logout"}
        IconComponent={
          <Icon name={"logout-variant"} backgroundColor="#FABC3F" />
        }
        onPress={() => {
          setUser(null);
          authStorage.remove();
        }}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
