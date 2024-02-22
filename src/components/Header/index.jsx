import logo from "../../assets/logo-dio.svg";
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../Button";
import {
  Container,
  Rows,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture,
} from "./styles";

export default function Header({ autenticado }) {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login")
  }
  const handleClickSignUp = () => {
    navigate("/cadastro")
  }

  return (
    <Wrapper>
      <Container>
        <Rows>
          <img src={logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Busca..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Rows>
        <Rows>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/113388395?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" onClick={handleClickSignUp}/>
            </>
          )}
        </Rows>
      </Container>
    </Wrapper>
  );
}
