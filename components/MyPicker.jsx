import {
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "@/constants/Colors";
import MyText from "./MyText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
const MyPicker = ({
  icon,
  items,
  placeholder,
  onSelectItem,
  value,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Pressable
        style={[styles.container, { width }]}
        onPress={() => setModalVisible(true)}
      >
        {icon && (
          <MaterialCommunityIcons name={icon} size={24} color="#505050" />
        )}
        {value ? (
          <MyText style={{ flex: 1 }}>{value.title}</MyText>
        ) : (
          <MyText style={{ flex: 1, color: Colors.medium }}>
            {placeholder}
          </MyText>
        )}
        <MaterialCommunityIcons name="chevron-down" size={24} color="#505050" />
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                title={item.title}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    backgroundColor: Colors.soft,
    borderRadius: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MyPicker;
