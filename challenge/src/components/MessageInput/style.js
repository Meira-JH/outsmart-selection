import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 6px 0;
  background-color: #468ac8;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const StyledInput = styled.input`
  width: 80%;
  border: none;
  height: 30px;
  border-radius: 4px;
  padding-left: 5px;
`;

export const StyledButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffff;
  box-shadow: 0px 0px 2px;
  cursor: pointer;

  :hover{
    box-shadow: 0px 0px 5px;
  }
  img{
    width: 25px;
  }
`;
