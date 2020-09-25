import React, { useState } from "react";
import { InputWrapper, StyledInput, StyledButton } from "./style";

function MessageInput({ sendMessage }) {
    const [input, setInput] = useState('')

  return (
    <InputWrapper>
      <StyledInput value={input} onChange={(e) => setInput(e.target.value)} />
      <StyledButton onClick={() => sendMessage(input)}>Enviar</StyledButton>
    </InputWrapper>
  );
}

export default MessageInput;
