import styled from "styled-components";

export const OuterDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;
`;

export const Author = styled.span`
  color: ${(props) => props.color};
  padding: 5px;
`;

export const Message = styled.div`
  margin: 5px 0;
  width: 45%;
  padding: 7px;
  box-shadow: 0px 0px 3px;
  border-radius: 8px;
`;

export const Time = styled.div`
  display: block;
  margin: 2px 0;
  font-size: 9px;
`;
