/* eslint-disable jsx-a11y/alt-text */
import React, { ReactNode } from "react";
import {
  Cards,
  Name,
  Image,
  Content,
  Avatar,
  ContentInt,
  Atributs,
} from "./style";
function Card(props) {
  return (
    <Cards >
      <Name >
        <h1>{props.name}</h1>
      </Name>
      <Image >
        <Avatar src={props.avatar} />
      </Image>
      <Content >
        <ContentInt >
          <Atributs>{props.tel}</Atributs>
          <Atributs>{props.email}</Atributs>
        </ContentInt>
      </Content>
    </Cards>
  );
}
export default Card;