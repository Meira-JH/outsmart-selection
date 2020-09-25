import React, { Fragment, useEffect, useState } from "react";
import Chat from "../../components/Chat";
import MessageInput from "../../components/MessageInput";
import { ChatPageWrapper } from "./style";
import SockJS from "sockjs-client";
import UserDeclaration from "../../components/UserDeclaration";

function ChatPage() {
  const socket = new WebSocket("ws://localhost:1337/", ["protocolOne"]);

  useEffect(() => {
    socket.onopen = () => {
      console.log("connected");
    };
  }, []);

  const [messages, setMessages] = useState([]);
  const [isUser, verifyUser] = useState(false);

  function handleOnClick(e) {
    socket.send(e);
  }

  function handleOnClickUser(e) {
    console.log(e)
    socket.send(e);
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
        <Fragment>
            <UserDeclaration setUser={(user) => handleOnClickUser(user)} />
        </Fragment>
      )}
    </ChatPageWrapper>
  );
}

export default ChatPage;
