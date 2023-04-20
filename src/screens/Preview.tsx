import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { IMAGES } from "../constants/images";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type PreviewProps = NativeStackScreenProps<RootStackParamList, "Preview">;

export const Preview = () => {
  const navigation = useNavigation<PreviewProps["navigation"]>();

  const onPressImage = useCallback(
    (uri: string) => {
      navigation.navigate("FullScreen", { uri });
    },
    [navigation]
  );

  const onPressDone = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <TouchableWithoutFeedback onPress={onPressDone}>
        <BlurView intensity={10} style={styles.container}>
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

          <View style={styles.row}>
            <TouchableOpacity onPress={() => onPressImage(IMAGES[0].uri)}>
              <Animated.Image
                style={styles.image}
                source={IMAGES[0]}
                sharedTransitionTag={IMAGES[0].uri}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressImage(IMAGES[1].uri)}>
              <Animated.Image
                style={styles.image}
                source={IMAGES[1]}
                sharedTransitionTag={IMAGES[1].uri}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => onPressImage(IMAGES[2].uri)}>
              <Animated.Image
                style={styles.image}
                source={IMAGES[2]}
                sharedTransitionTag={IMAGES[2].uri}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressImage(IMAGES[3].uri)}>
              <Animated.Image
                style={styles.image}
                source={IMAGES[3]}
                sharedTransitionTag={IMAGES[3].uri}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => onPressImage(IMAGES[4].uri)}>
              <Animated.Image
                style={styles.image}
                source={IMAGES[4]}
                sharedTransitionTag={IMAGES[4].uri}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressImage(IMAGES[5].uri)}>
              <Animated.Image
                style={styles.image}
                source={IMAGES[5]}
                sharedTransitionTag={IMAGES[5].uri}
              />
            </TouchableOpacity>
          </View>
        </BlurView>
      </TouchableWithoutFeedback>
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
    width: 150,
    height: 150,
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
