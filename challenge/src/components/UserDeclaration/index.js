import React, { useState } from "react";
import { InputWrapper, StyledInput } from "./style";
import Button from "@material-ui/core/Button";

function UserDeclaration({ setUser }) {
  const [user, declareUser] = useState("");

  return (
    <InputWrapper>
      <span>Digite seu nome de usuário</span>
      <StyledInput
        onKeyDown={(e) => e.keyCode === 13 && setUser(user)}
        value={user}
        onChange={(e) => declareUser(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={() => setUser(user)}>
        Entrar
      </Button>
      {/* <StyledButton >Enviar</StyledButton> */}
    </InputWrapper>
  );
}

export default UserDeclaration;
