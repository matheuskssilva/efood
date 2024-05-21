import * as S from "./styles"


export type Props = {
    title: string
    description: string
    image: string
}

export const Restaurante = ({ title, description, image }: Props) => {
  const getDescription  = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 100) + '...'
    }
  }
  return (
    <S.Card>
        <S.Content>
          <S.Photo src={image} />
          <S.Title>{title}</S.Title>
          <S.Description>{getDescription(description)}</S.Description>
          <S.ButtonCart>Adicionar ao carrinho</S.ButtonCart>
        </S.Content>
    </S.Card>
  )
}

