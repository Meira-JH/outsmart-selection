import React, { useEffect } from "react";
import { ChatWrapper, Author, Message, Time, OuterDiv } from "./style";

function Chat({ messages }) {

  function convertTimestamp(timestamp) {
    const time = new Date(timestamp);
    return time.toLocaleTimeString().slice(0, 5);
  }

  return (
    <OuterDiv>
      <ChatWrapper>
        {messages
          ? messages
              .sort((a, b) => b.time - a.time)
              .map((message, index) => (
                <Message key={index}>
                  {" "}
                  <Author color={message.color}>{message.author}:</Author>{" "}
                  {message.text}
                  <Time> {convertTimestamp(message.time)} </Time>
                </Message>
              ))
          : null}{" "}
      </ChatWrapper>
    </OuterDiv>
  );
}

export default Chat;
