import { Button } from "../Cart/styles"
import * as S from './styles'


export const Checkout = ({ setPayment }: { setPayment: (value: boolean) => void }) => {
  return (
    <S.CheckoutContainer>
      <h2>Entrega</h2>
      <S.InputGroup className="marginTop">
        <label htmlFor="">Quem irá receber</label>
        <input type="text" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="">Endereço</label>
        <input type="text" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="">Cidade</label>
        <input type="text" />
      </S.InputGroup>
     <div className="flex">
     <S.InputGroup>
        <label htmlFor="">CEP</label>
        <input type="text" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="">Número</label>
        <input type="text" />
      </S.InputGroup>
     </div>
      <S.InputGroup>
        <label htmlFor="">Complemento (opcional)</label>
        <input type="text" />
      </S.InputGroup>
       
        <div className="button-container">
          <Button>Continuar com o pagamento</Button>
          <Button onClick={() => setPayment(false)}>Voltar para o carrinho</Button>
        </div>
    
    </S.CheckoutContainer>
  )
}
