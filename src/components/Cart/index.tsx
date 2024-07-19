import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { close, remove } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import { useState } from "react";
import { Checkout } from "../Checkout";
import { formatPrice, getAmount } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [payment, setPayment] = useState(false);
  const navigate = useNavigate()

  const isCartEmpty = items.length === 0;

  const closeCart = () => {
    dispatch(close());
  };
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const handleRedirect = () => {
    closeCart()
    navigate('/')
  }



  return (
    <>
      <S.CartContainer className={isOpen ? "is-open" : ""}>
        <S.Overlay onClick={closeCart} />
        <S.SideBar>
          {!payment ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formatPrice(item.preco)}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      />
                    </div>
                  </S.CartItem>
                ))}
              </ul>
             
               {isCartEmpty ? (
                <div>
                    <h3 className="h3">Seu carrinho está vazio...</h3>
                    <S.Button onClick={handleRedirect}>Adicionar item</S.Button>
                </div>
               ) : (
                <>
                 <S.Price>
                   <h3>Valor total</h3>
                   <span>{formatPrice(getAmount(items))}</span>
                   </S.Price>
                   <S.Button onClick={() => setPayment(true)}>
                Continuar com a entrega
              </S.Button>
                </>
               )}
            </>
          ) : (
            <Checkout setPayment={setPayment} items={items} />
          )}
        </S.SideBar>
      </S.CartContainer>
    </>
  );
};
