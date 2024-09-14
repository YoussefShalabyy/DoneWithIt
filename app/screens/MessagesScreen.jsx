import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import { ListItem, ListItemDeleteAction, Seperator } from "@/components/lists";

const data = [
  {
    id: 1,
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod necessitatibus, ut similique eos labore quam, quisquam, veritatis a distinctio saepe placeat. Reiciendis quisquam consequuntur explicabo voluptas id, ipsum nesciunt.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod necessitatibus, ut similique eos labore quam, quisquam, veritatis a distinctio saepe placeat. Reiciendis quisquam consequuntur explicabo voluptas id, ipsum nesciunt.",
    image: require("../../assets/images/usf.jpg"),
  },
  {
    id: 2,
    title: "D2",
    desc: "T2",
    image: require("../../assets/images/usf.jpg"),
  },
  {
    id: 3,
    title: "D2",
    desc: "T2",
    image: require("../../assets/images/usf.jpg"),
  },
  {
    id: 4,
    title: "D2",
    desc: "T2",
    image: require("../../assets/images/usf.jpg"),
  },
  {
    id: 5,
    title: "D2",
    desc: "T2",
    image: require("../../assets/images/usf.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = ({ id }) => {
    const filtered = messages.filter((item) => item.id !== id);
    setMessages(filtered);
  };
  return (
    <Screen>
      <FlatList
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "D2",
              desc: "T2",
              image: require("../../assets/images/usf.jpg"),
            },
          ])
        }
        ItemSeparatorComponent={Seperator}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
            onPress={() => console.log("Message pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
