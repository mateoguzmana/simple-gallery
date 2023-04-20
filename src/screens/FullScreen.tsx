import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { BlurView } from "expo-blur";

export const FullScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { uri } = route.params;

  const onPressDone = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <BlurView intensity={1} style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPressDone}>
          <Image
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png",
            }}
            style={styles.buttonImage}
            tintColor="white"
          />
        </TouchableOpacity>

        <Animated.Image
          style={styles.image}
          source={{ uri }}
          sharedTransitionTag={uri}
        />
      </BlurView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
    margin: 10,
    borderRadius: 20,
  },
  button: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    borderRadius: 5,
    opacity: 0.8,
  },
  buttonImage: {
    width: 25,
    height: 25,
  },
});
