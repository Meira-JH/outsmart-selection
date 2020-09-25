import React from "react";
import { ChatWrapper } from "./style";

function Chat({ messages }) {
  return (
    <ChatWrapper>
      {" "}
      {messages.map((message, index) => (
        <span key={index}>
          {" "}
          {message.author}: {message.text}
        </span>
      ))}
      {" "}
    </ChatWrapper>
  );
}

export default Chat;
