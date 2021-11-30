import styled from "styled-components";

export const Cards = styled.div`

  position: relative;
  margin: 2rem;
  margin-top: 3rem;
  width: 300px;
  height: 200px;
  font-family: sans-serif;

`;
export const Name = styled.div`
  border-radius: 20px 20px 0 0;
  height: 70px;
  background-color: #09907b;
  display: flex;
  > h1 {
    font-size: 30px;
    color: #fff;
    display: flex;
    margin: 10% 20px;
  }
`;
export const Image = styled.div`
  width: 100%;
  position: absolute;
  top: 25px;
  left: 200px;
  z-index: 999;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 5px solid #fff;
  height: 80px;
  width: 80px;
`;

export const Content = styled.div`
  position: relative;
  height: 130px;
  background: #0ff1ce;
  border-radius: 0px 0px 20px 20px;
`;
export const ContentInt = styled.div`
  width: 100%;
  margin: 0 20px;
  position: absolute;
  bottom: 40px;
`;

export const Atributs = styled.div`
  font-size: 18px;
  padding: 5px 0px;
  color: #444;
`;
