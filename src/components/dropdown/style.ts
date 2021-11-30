import styled from "styled-components";

export const StyledSelect = styled.div`
  margin: 2rem;
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  background: #fff;
`;

export const StyledOptions = styled.div`
  font-family: sans-serif;
  position: absolute;
  max-height: 180px;
  height: auto;
  overflow-y: auto;
  top: 40px;
  width: 100%;
  padding: 4px 0;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledOption = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  cursor: pointer;
  border-bottom: #dfdfdf;

  &:hover {
    color: #fff;
    background: #09907b;
  }
  p {
    margin-top: 2px;
    font-size: 13px;
    opacity: 0.7;
  }
`;

export const StyledSelected = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 40px;
  border-bottom: 2px solid #09907b;

  &:hover {
    border-bottom: 2px solid #0ff1ce;
  }
  > div {
    height: 40px;
    display: flex;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 40px;
    > span {
      padding-left: 0.5rem;
      font-family: sans-serif;
    }
    > input {
      border: none;
      font-size: 14px;
      &:focus {
        outline: none;
      }
    }
  }
`;
