import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

interface BackButtonProps {
  onPress(): void;
}

export const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={{
          uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png",
        }}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    tintColor: "white",
  },
});
