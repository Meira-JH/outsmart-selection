import React from "react";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #ffff;
`;

function App() {
  return (
    <AppWrapper>
      <ChatPage />
    </AppWrapper>
  );
}

export default App;
