import React, { useState } from "react";
import { InputWrapper, StyledInput, StyledButton } from "./style";
import sendIcon from "../../img/send-icon.png";

function MessageInput({ sendMessage }) {
  const [input, setInput] = useState("");

  return (
    <InputWrapper>
      <StyledInput
        onKeyDown={(e) =>
          e.keyCode === 13 && (sendMessage(input), setInput(""))
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <StyledButton onClick={() => (sendMessage(input), setInput(""))}>
        <img src={sendIcon} />
      </StyledButton>
    </InputWrapper>
  );
}

export default MessageInput;
