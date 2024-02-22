import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Java from "../../assets/Java.jpg"
import {
  CardContainer,
  Content,
  HasInfo,
  PostInfo,
  UserInfo,
  UserPicture,
  ImageBackground,
} from "./styles";


export default function Card() {
  return(
    <CardContainer>
      <ImageBackground src={Java} />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/113388395?v=4" />
          <div>
            <h4>Kaio Dantas</h4>
            <p>Há 10 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de React</h4>
          <p>Projeto feito para a trilha de React Developer <strong>Saiba mais...</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#React #JavaScript</h4>
          <p>
            <ThumbUpIcon /> 22
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
  
}
