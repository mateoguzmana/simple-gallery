import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Gallery } from "./Gallery";

export const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      message: "Hi there!",
      sender: "other",
      attachment: null,
    },
    {
      id: "2",
      message: "How are you?",
      sender: "other",
      attachment: null,
    },
    {
      id: "3",
      message: "I'm good, thanks! How about you?",
      sender: "self",
      attachment: null,
    },
    {
      id: "4",
      message: "I'm doing well, thanks!",
      sender: "other",
      attachment: null,
    },
    {
      id: "5",
      message: "By the way, here's a cute puppy picture",
      sender: "other",
      attachment: <Gallery />,
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
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 50,
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
    paddingVertical: 20,
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
