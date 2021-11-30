import styled from "styled-components";

export const Chips = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 10px 12px;
  margin: 2rem;
  border-radius: 20px;
  border: 2px solid #09907b;
  background-color: transparent;
  color: darkgreen;
  font-family: sans-serif;
  cursor: pointer;
  &:hover {
    border: 2px solid #0ff1ce;
  }
`;

export const Wrapper = styled.div`
display: flex;
  height: 20px;
  align-self: center;
  font-size: 16px;
  line-height: 20px;
  margin: 1px 6px 0 6px;
`;

export const Avatar = styled.img`
  height: 20px;
  margin-right: 0.5rem;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin: 1px 6px 0 6px;
`;
