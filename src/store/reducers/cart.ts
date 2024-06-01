import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { Cardapio } from "../../pages/Home/menu";

type CartState = {
    items: Cardapio[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       add: (state, action: PayloadAction<Cardapio>) => {
        state.items.push(action.payload)
       }
    }
})
export const { add } = cartSlice.actions
export default cartSlice.reducer