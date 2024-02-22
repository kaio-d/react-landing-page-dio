import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import banner from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHightLight } from "./styles";

export default function Home() {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login")
  }

  return (
    <div>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightLight>
              Implemente
              <br />
            </TitleHightLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar" variant="Secondary" onClick={handleClickSignIn}/>
        </div>
        <div>
          <img src={banner} alt="Imgem principal" />
        </div>
      </Container>
    </div>
  );
}
