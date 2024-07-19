import * as S from "./styles"

import close from '../../assets/close.png'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { add, open } from "../../store/reducers/cart"
import { Cardapio } from "../../pages/Home/menu"
import { formatPrice } from "../../utils"
import { Loader } from "../Loader"


export type Props = {
    title: string
    description: string
    porcao: string
    image: string
    price: number
    cardapio: Cardapio
    isLoading: boolean
}

export const Restaurante = ({ title, description, image, porcao, price, cardapio, isLoading }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
    setIsVisible(false)
  }

  const [isVisible, setIsVisible] = useState(false)
  const getDescription  = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 100) + '...'
    }
  }

  if(isLoading) {
    return <Loader />
  }

  const showModal = () => {
    if (isVisible) {
      return 'isVisible'
    } 
    return ''
  }
  return (
   <>
         <S.Card>
        <S.Content>
          <S.Photo src={image} />
          <S.Title>{title}</S.Title>
          <S.Description>{getDescription(description)}</S.Description>
          <S.ButtonCart onClick={() => setIsVisible(true)}>Adicionar ao carrinho</S.ButtonCart>
        </S.Content>
    </S.Card>

  <S.Modal className={showModal()}>
  <S.ModalContent>
   <div>
      <img src={image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <img src={close} alt="close modal" onClick={() => setIsVisible(false)} />
          
        </div>
        <p>{description}</p>
          <p>Serve: {porcao}</p>
          <button onClick={addCart}>{`Adicionar ao carrinho - ${formatPrice(price)}`}</button>
      </div>
    </div>
   </S.ModalContent>
   <div className="overlay" onClick={() => setIsVisible(false)} />  
  </S.Modal>
   </>
  )
}

