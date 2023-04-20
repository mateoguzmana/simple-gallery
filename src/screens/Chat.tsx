import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../App";
import { Gallery } from "../components/Gallery";

export type ChatProps = NativeStackScreenProps<RootStackParamList, "Chat">;

export const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    {
      id: number;
      message: string;
      sender: "self" | "other";
      attachment: JSX.Element | null;
    }[]
  >([
    {
      id: 1,
      message: "Yo, you back from Colombia?",
      sender: "other",
      attachment: null,
    },
    {
      id: 2,
      message: "Yeah, just got back yesterday",
      sender: "self",
      attachment: null,
    },
    {
      id: 3,
      message: "How was it?",
      sender: "other",
      attachment: null,
    },
    {
      id: 4,
      message: "It was amazing! Here are some photos",
      sender: "self",
      attachment: <Gallery />,
    },
    {
      id: 5,
      message: "Wow, that looks amazing!",
      sender: "other",
      attachment: null,
    },
    {
      id: 6,
      message: "Did you go to the Amazon?",
      sender: "other",
      attachment: null,
    },
    {
      id: 7,
      message: "Did you try empanadas?",
      sender: "other",
      attachment: null,
    },
  ]);

  const handleSend = () => {
    if (message.trim() === "") return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        message,
        sender: "self",
        attachment: null,
      },
    ]);
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.message,
              message.sender === "self" ? styles.self : styles.other,
            ]}
          >
            {message.attachment && message.attachment}

            <Text style={styles.messageText}>{message.message}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type your message here..."
        />

        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  messagesContainer: {
    flex: 1,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
    position: "relative",
  },
  self: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C5",
  },
  other: {
    alignSelf: "flex-start",
    backgroundColor: "#E8E8E8",
  },
  messageText: {
    fontSize: 16,
  },
  attachment: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25,
    backgroundColor: "#f2f2f2",
    marginRight: 10,
    fontSize: 16,
    height: 40,
  },
  sendButton: {
    backgroundColor: "#2B68E6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
