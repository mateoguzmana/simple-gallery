import React from "react";
import { Gallery } from "../components/Gallery";

export const MESSAGES = [
  {
    id: "1",
    message: "Yo, you back from Colombia?",
    sender: "other",
    attachment: null,
  },
  {
    id: "2",
    message: "Yeah, just got back yesterday",
    sender: "self",
    attachment: null,
  },
  {
    id: "3",
    message: "How was it?",
    sender: "other",
    attachment: null,
  },
  {
    id: "4",
    message: "It was amazing! Here are some photos",
    sender: "self",
    attachment: <Gallery />,
  },
  {
    id: "5",
    message: "Wow, that looks amazing!",
    sender: "other",
    attachment: null,
  },
  {
    id: "6",
    message: "Did you go to the Amazon?",
    sender: "other",
    attachment: null,
  },
  {
    id: "7",
    message: "Did you try empanadas?",
    sender: "other",
    attachment: null,
  },
];
