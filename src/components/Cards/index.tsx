// Cards.tsx
import Button from "../Button";
import { Tag } from "../Tag";
import * as S from "./styles";

import star from "../../assets/star.png"

type Props = {
  title: string;
  description: string;
  emphasis?: string;
  category: string;
  rating: string;
  image: string;
  starImage?: string;
  id: number
};

export const Cards = ({
  title,
  description,
  category,
  rating,
  image,
  emphasis,
  id
}: Props) => {
  return (
    <S.Card>
      
        <S.ImageCard src={image} alt="" />
     
      <S.CardContainer>
        <S.Infos>
          {emphasis && <Tag size="big">{emphasis}</Tag>}
          <Tag>{category}</Tag>
        </S.Infos>
        <S.HeaderText>
          <S.Title>{title}</S.Title>
          <S.Rating>
            <h3>{rating}</h3>
           <img src={star} alt="Star rating" />
          </S.Rating>
        </S.HeaderText>
        <S.Description>{description}</S.Description>
        <Button to={`/perfil/${id}`} title="Acessar o cardápio">
          Saiba mais
        </Button>
      </S.CardContainer>
    </S.Card>
  );
};
