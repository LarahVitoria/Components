import styled from "styled-components";

export const TooltipText = styled.div`
  border: 2px solid #09907b;
  margin: 2rem;
  background-color: transparent;
  padding: 10px 12px;
  color: darkgreen;
  width: 15rem;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  font-family: sans-serif;
  &:hover {
    border: 2px solid #0ff1ce;
  }
`;
export const TooltipBox = styled.div`
  position: absolute;
  font-family: sans-serif;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: auto;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: auto;
    padding: 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;