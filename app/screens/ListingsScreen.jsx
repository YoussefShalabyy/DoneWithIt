import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../../components/Screen";
import Card from "../../components/Card";
import MyText from "../../components/MyText";
import MyButton from "../../components/MyButton";
import useApi from "../../hooks/useApi";
import apiClient from "../api/client";
import listingsApi from "../api/listings";
const ListingsScreen = () => {
  const getlistingsApi = useApi(listingsApi.getListings);
  useEffect(() => {
    getlistingsApi.getItems();
  }, []);

  return (
    <Screen>
      <View style={{ paddingHorizontal: 20 }}>
        <ActivityIndicator animating={getlistingsApi.loading} />
        <FlatList
          data={getlistingsApi.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(m) => m.id.toString()}
          renderItem={({ item }) => (
            <Card
              onPress={() => {}}
              title={item.title}
              subTitle={item.price}
              imageUrl={item.images[0].url}
            />
          )}
        />
      </View>
      {getlistingsApi.error && (
        <View style={{ padding: 20, gap: 15 }}>
          <MyText>Couldn't get the data.</MyText>
          <MyButton title={"Retry"} onPress={() => getItems()} />
        </View>
      )}
    </Screen>
  );
};

export default ListingsScreen;
