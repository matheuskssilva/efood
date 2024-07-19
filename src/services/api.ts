import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home/menu'

type Products = {
    id: number,
    price: number
}

type PurchasePayload = {
    products: Products[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement?: string
        }
    }
        payment: {
            card: {
                name?: string
                number?: string
                code?: number
                expires?: {
                    month: number
                    year: number
                }
            }
        }    
    }


type PurchaseResponse = {
    orderId: string
  }

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: ' https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getRestaurantSelected: builder.query<Restaurant, string>({
            query: (id) => `restaurantes/${id}`
        }),
        getRestaurants: builder.query<Restaurant[], void>({
            query: () => 'restaurantes'
          }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export default api

export const {useGetRestaurantsQuery, useGetRestaurantSelectedQuery, usePurchaseMutation } = api