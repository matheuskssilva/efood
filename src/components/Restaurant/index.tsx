import { ButtonCart, Card, Content, Description, Photo, Title } from "./styles"


export type Props = {
    title: string
    description: string
    image: string
}

export const Restaurante = ({ title, description, image }: Props) => {
  return (
    <Card>
        <Content>
          <Photo src={image} />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonCart>Adicionar ao carrinho</ButtonCart>
        </Content>
    </Card>
  )
}

