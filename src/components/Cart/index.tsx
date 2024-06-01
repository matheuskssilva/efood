import * as S from "./styles"

import doce from '../../assets/doce_trattoria.png'

export const Cart = () => {
  return (
    <>
        <S.CartContainer>
       <S.Overlay />
       <S.SideBar>
        <ul>
            <S.CartItem>
                <img src={doce} alt="" />
                <div>
                    <h3>doce</h3>
                    <span>R$ 79,90</span>
                <button type="button" />
                </div>
            </S.CartItem>
        </ul>
        <S.Price>
            <h3>Valor total</h3>
            <span>R$ 79,90</span>
        </S.Price>
        <S.Button>Continuar com a entrega</S.Button>
       </S.SideBar>
    </S.CartContainer>
    </>
  )
}
