import {
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requsetPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      return Alert.alert(
        "DoneWithIt",
        "You need to enable permission to access media"
      );
  };
  useEffect(() => {
    requsetPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) selectImage(); //next we delete
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
          style: "destructive",
        },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("error loading the image", error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <MaterialCommunityIcons name="camera" size={40} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    backgroundColor: "#eee",
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 8,
  },
});
