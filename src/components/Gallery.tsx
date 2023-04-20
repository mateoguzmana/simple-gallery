import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { IMAGES } from "../constants/images";
import { instagramTranforms } from "../utils/transforms";
import { ChatProps } from "../screens/Chat";

export const Gallery = () => {
  const navigation = useNavigation<ChatProps["navigation"]>();

  const onPressImage = useCallback(
    () => navigation.navigate("Preview"),
    [navigation]
  );

  return (
    <View style={styles.container}>
      {IMAGES.map((image, index) => (
        <TouchableOpacity key={index} onPress={onPressImage}>
          <Animated.Image
            key={index}
            source={image}
            sharedTransitionTag={image.uri}
            style={[
              styles.image,
              {
                transform: instagramTranforms(index),
                zIndex: IMAGES.length - index,
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 200,
  },
  image: {
    top: 30,
    left: 50,
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 20,
  },
});
