import React, { useCallback } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import { RootStackParamList } from "../App";

type FullScreenProps = NativeStackScreenProps<RootStackParamList, "FullScreen">;

export const FullScreen = () => {
  const navigation = useNavigation<FullScreenProps["navigation"]>();
  const route = useRoute<FullScreenProps["route"]>();
  const { uri } = route.params;

  const onPressDone = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={onPressDone}>
      <BlurView intensity={1} style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPressDone}>
          <Image
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png",
            }}
            style={styles.buttonImage}
            // @ts-ignore
            tintColor="white"
          />
        </TouchableOpacity>

        <Animated.Image
          style={styles.image}
          source={{ uri }}
          sharedTransitionTag={uri}
        />
      </BlurView>
    </TouchableWithoutFeedback>
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
