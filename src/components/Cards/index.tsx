
import Button from '../Button'
import { Tag } from '../Tag'
import { Card, CardContainer, Category, Description, Title, Rating, HeaderText, Infos } from './styles'

type Props = {
    title: string
    description: string
    emphasis?: string
    category: string
    rating: string
    image: string
    starImage: string
}

export const Cards = ({ title, description, category, rating, image, starImage, emphasis }: Props) => {
  return (
    <Card>
        <Category>
            <img src={image} alt="" />
            <Infos>
            {emphasis && <Tag size='big'>{emphasis}</Tag>}
            <Tag>{category}</Tag>
            </Infos>
        </Category>
       <CardContainer>
        <HeaderText>
            <Title>{title}</Title>
            <Rating>
            <h3>{rating}</h3>
            <img src={starImage} alt="" />
            </Rating>
        </HeaderText>
        <Description>{description}</Description>
        <Button 
        to='/perfil'
        title='Acessar o cardápio'
        >
          Saiba mais
        </Button>
       </CardContainer>
    </Card>
  )
}
