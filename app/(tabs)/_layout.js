import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TabBarButton from "../../components/TabBarButton";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="listingEdit"
        options={{
          tabBarButton: () => (
            <TabBarButton onPress={() => router.navigate("listingEdit")} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
