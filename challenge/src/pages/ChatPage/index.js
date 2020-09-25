import React, { Fragment, useEffect, useState } from "react";
import Chat from "../../components/Chat";
import MessageInput from "../../components/MessageInput";
import { ChatPageWrapper, DeclarationWrapper } from "./style";
import UserDeclaration from "../../components/UserDeclaration";

const socket = new WebSocket("ws://localhost:1337/");

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isUser, verifyUser] = useState(false);

  useEffect(() => {
    socket.onopen = () => {
      console.log("connected");
    };
  }, []);

  useEffect(() => {
    console.log("messages state", messages);

    socket.onmessage = function (event) {
      console.log("no on message. message: ", event);
      const msg = JSON.parse(event.data);

      switch (msg.type) {
        case "history":
          console.log("messages state", messages);

          console.log("history chegada", msg.data);
          setMessages(msg.data);
          break;
        case "message":
          setMessages([...messages, msg.data]);
          break;
      }

      window.scrollByPages(1);
    };
  }, [socket.onmessage]);

  //   const message = {
  //     type: "message",
  //     data: {
  //       time: Date.now(),
  //       text: e,
  //       author: "test",
  //       color: "blue",
  //     },
  //   };
  //   console.log(message);

  function handleOnClick(e) {
    socket.send(e);
  }

  function handleOnClickUser(e) {
    socket.send(e);
    console.log(e);
    verifyUser(true);
  }

  return (
    <ChatPageWrapper>
      {isUser ? (
        <Fragment>
          <Chat messages={messages} />
          <MessageInput sendMessage={(input) => handleOnClick(input)} />
        </Fragment>
      ) : (
        <DeclarationWrapper>
          <UserDeclaration setUser={(user) => handleOnClickUser(user)} />
        </DeclarationWrapper>
      )}
    </ChatPageWrapper>
  );
}

export default ChatPage;
