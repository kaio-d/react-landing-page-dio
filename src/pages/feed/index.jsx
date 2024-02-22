import React from "react";
import Header from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>Top 5 da semana</TitleHighlight>
          <UserInfo
            percentual={80}
            name="Kaio Dantas"
            image="https://avatars.githubusercontent.com/u/113388395?v=4"
          />
          <UserInfo
            percentual={60}
            name="Kaio Dantas"
            image="https://avatars.githubusercontent.com/u/113388395?v=4"
          />
          <UserInfo
            percentual={50}
            name="Kaio Dantas"
            image="https://avatars.githubusercontent.com/u/113388395?v=4"
          />
          <UserInfo
            percentual={45}
            name="Kaio Dantas"
            image="https://avatars.githubusercontent.com/u/113388395?v=4"
          />
          <UserInfo
            percentual={25}
            name="Kaio Dantas"
            image="https://avatars.githubusercontent.com/u/113388395?v=4"
          />
        </Column>
      </Container>
    </>
  );
}
