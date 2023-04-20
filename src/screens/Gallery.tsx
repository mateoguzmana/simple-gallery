import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { IMAGES } from "../constants/images";

const instagramTranforms = (index: number) => {
  switch (index) {
    case 0:
      return [{ translateY: -20 }, { translateX: 10 }, { rotate: "15deg" }];
    case 1:
      return [{ translateY: -10 }, { translateX: -10 }, { rotate: "-10deg" }];
    case 2:
      return [{ translateY: 20 }, { translateX: -10 }, { rotate: "5deg" }];
    case 3:
      return [{ translateY: 30 }, { translateX: 20 }, { rotate: "-5deg" }];
    case 4:
      return [{ translateY: 10 }, { translateX: 10 }, { rotate: "10deg" }];
    default:
      return [];
  }
};

export const Gallery = () => {
  const navigation = useNavigation();

  const onPressImage = useCallback(
    (uri) => {
      navigation.navigate("Preview", { uri });
    },
    [navigation]
  );

  return (
    <View>
      {IMAGES.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => onPressImage(image.uri)}>
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
    top: 100,
    left: 20,
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
