import React from 'react'
import Menu from '../../models/Menu'

import sushi from '../../assets/sushi.png'
import star from '../../assets/star.png'
import trattoria from '../../assets/doce_trattoria.png'
import CardsList from '../../components/CardsList'

const menuCards: Menu[] = [
    {
        id: 1,
        emphasis: 'Destaque da semana',
        category: 'Japonesa',
        image: sushi,
        title: 'Hioki Sushi',
        rating: '4.9',
        starImage: star,
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    },
    {
        id: 2,
        category: 'Italiana',
        image: trattoria,
        title: 'La Dolce Vita Trattoria',
        rating: '4.6',
        starImage: star,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 3,
        category: 'Italiana',
        image: trattoria,
        title: 'La Dolce Vita Trattoria',
        rating: '4.6',
        starImage: star,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 4,
        category: 'Italiana',
        image: trattoria,
        title: 'La Dolce Vita Trattoria',
        rating: '4.6',
        starImage: star,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 5,
        category: 'Italiana',
        image: trattoria,
        title: 'La Dolce Vita Trattoria',
        rating: '4.6',
        starImage: star,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
    {
        id: 6,
        category: 'Italiana',
        image: trattoria,
        title: 'La Dolce Vita Trattoria',
        rating: '4.6',
        starImage: star,
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    }
]

export const MenuList = () => {
  return (
    <div>
        <CardsList menuRestaurant={menuCards} />
    </div>
  )
}
