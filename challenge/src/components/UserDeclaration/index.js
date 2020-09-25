import React, { useState } from "react";
import { InputWrapper, StyledInput, StyledButton } from "./style";

function UserDeclaration({ setUser }) {
    const [user, declareUser] = useState('')

  return (
    <InputWrapper>
      <StyledInput value={user} onChange={(e) => declareUser(e.target.value)} />
      <StyledButton onClick={() => setUser(user)}>Enviar</StyledButton>
    </InputWrapper>
  );
}

export default UserDeclaration;

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