import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import EmailIcon from "@mui/icons-material/Email";
import NoEncryptionGmailerrorredIcon from "@mui/icons-material/NoEncryptionGmailerrorred";
import PersonIcon from "@mui/icons-material/Person";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  FooterDescription,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    email: yup.string().email("email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválida");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                control={control}
                placeholder="Nome Completo"
                leftIcon={<PersonIcon color="secondary" />}
                errorMessage={errors?.name?.message}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                control={control}
                leftIcon={<EmailIcon color="secondary" />}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                control={control}
                leftIcon={<NoEncryptionGmailerrorredIcon color="secondary" />}
                errorMessage={errors?.password?.message}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <FooterDescription>
                <p>
                  Ao clicar em "criar minha conta grátis", declaro que aceito as
                  Políticas de Privacidade e os Termos de Uso da DIO
                </p>
                <p>
                  Já tenho conta. <span>Fazer login</span>
                </p>
              </FooterDescription>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
}
