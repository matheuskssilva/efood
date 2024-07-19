import { useFormik } from "formik";
import { Button } from "../Cart/styles";
import * as S from "./styles";
import { usePurchaseMutation } from "../../services/api";
import * as Yup from "yup";
import { useState } from "react";
import { Cardapio } from "../../pages/Home/menu";
import { formatPrice, getAmount } from "../../utils";
import ReactInputMask from "react-input-mask";


export const Checkout = ({
  setPayment,
  items
}: {
  setPayment: (value: boolean) => void;
  items: Cardapio[]
}) => {
  const [purchase, { isLoading}] = usePurchaseMutation();
  const [formAdress, setFormAdress] = useState(false);

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      cep: "",
      number: "",
      complement: "",
      nameOwner: "",
      numberOwner: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .min(5, "Endereço Inválido")
        .required("Campo obrigatório"),
      city: Yup.string()
        .min(3, "Cidade Inválida")
        .required("Campo obrigatório"),
      cep: Yup.string().min(8, "CEP Inválido").required("Campo obrigatório"),
      number: Yup.string()
        .min(3, "Número Inválido")
        .required("Campo obrigatório"),
      complement: Yup.string().min(3, "Complemento Inválido"),
      nameOwner: Yup.string()
        .min(5, "Nome Inválido")
        .required("Campo obrigatório"),
      numberOwner: Yup.string()
        .min(16, "Número Inválido")
        .required("Campo obrigatório"),
      cardCode: Yup.string()
        .min(3, "Código de Segurança Inválido")
        .required("Campo obrigatório"),
      expiresMonth: Yup.string()
        .min(2, "Mês Inválido")
        .required("Campo obrigatório"),
      expiresYear: Yup.string()
        .min(2, "Ano Inválido")
        .required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10,
          },
        ],
        delivery: {
          receiver: values.nameOwner,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement,
          },
          payment: {
            card: {
              name: values.nameOwner,
              number: values.numberOwner,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear),
              },
            },
          },
        },
        
      });
    },
  });

  const checkoutInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formik.touched;
    const isInvalid = fieldName in formik.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };


  const fromAdressIsValid = () => {
    const isValid =
      !formik.errors.address &&
      !formik.errors.city &&
      !formik.errors.cep &&
      !formik.errors.number &&
      formik.touched.address;

    if (isValid) {
      setFormAdress(true);
    } else {
      return alert('Preencha todos os campos')
    }
  };

  return (
    <div className="container">
      
      <S.CheckoutContainer onSubmit={formik.handleSubmit}>
      {formAdress ? (
        <>
          <h2>Pagamento - Valor a pagar {formatPrice(getAmount(items))} </h2>
          <S.InputGroup className="marginTop">
            <label htmlFor="nameOwner">Nome do Cartão</label>
            <input
              type="text"
              name="nameOwner"
              value={formik.values.nameOwner}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("nameOwner") ? "error" : ""}
            />
            <label htmlFor="numberOwner">Número do Cartão</label>
            <ReactInputMask
              type="text"
              name="numberOwner"
              value={formik.values.numberOwner}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("numberOwner") ? "error" : ""}
              mask="9999 9999 9999 9999"
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <ReactInputMask
              type="text"
              name="cardCode"
              value={formik.values.cardCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("cardCode") ? "error" : ""}
              mask="999"
            />
          </S.InputGroup>
         <div className="flex">
         <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <ReactInputMask
              type="text"
              name="expiresMonth"
              value={formik.values.expiresMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("expiresMonth") ? "error" : ""}
              mask="99"
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <ReactInputMask
              type="text"
              name="expiresYear"
              value={formik.values.expiresYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("expiresYear") ? "error" : ""}
              mask="9999"
              />
          </S.InputGroup>
              </div>
          <div className="button-container">
              <Button type="submit" >
              {isLoading ? 'Finalizando o pagamento' : 'Finalizar Pagamento'}
              </Button>
              <Button type="button" onClick={() => setFormAdress(false)}>
              Voltar para a edição de endereço
              </Button>
            </div>
        </>
      ) : (
        <>
          <h2>Entrega</h2>
          <S.InputGroup className="marginTop">
           <label htmlFor="">Quem irá Receber</label>
           <input type="text" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("address") ? "error" : ""}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("city") ? "error" : ""}
            />
          </S.InputGroup>
          <div className="flex">
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <ReactInputMask
                type="text"
                name="cep"
                value={formik.values.cep}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={checkoutInputHasError("cep") ? "error" : ""}
                mask="99.999-999"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Número</label>
              <ReactInputMask
                type="text"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={checkoutInputHasError("number") ? "error" : ""}
                mask="9999"
              />
            </S.InputGroup>
          </div>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              name="complement"
              value={formik.values.complement}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkoutInputHasError("complement") ? "error" : ""}
            />
            <div className="button-container">
              <Button type="button" onClick={() => fromAdressIsValid()}>
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={() => setPayment(false)}>
                Voltar para o carrinho
              </Button>
            </div>
          </S.InputGroup>
        </>
      )}
    </S.CheckoutContainer>
  
    </div>
  );
};
