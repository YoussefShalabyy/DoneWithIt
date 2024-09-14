import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris.map((uri) => (
          <ImageInput
            imageUri={uri}
            key={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </ScrollView>
    </View>
  );
};

export default ImageInputList;
