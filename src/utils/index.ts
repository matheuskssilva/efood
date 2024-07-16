import { Cardapio } from "../pages/Home/menu";

export const formatPrice = (price = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

export  const getAmount = (items: Cardapio[]) => {
    return items.reduce((accumulator, valueCurrent) => {
      return (accumulator += valueCurrent.preco!);
    }, 0);
  };