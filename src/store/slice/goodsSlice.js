import { createSlice } from "@reduxjs/toolkit";
import goods from '../../goods.json';

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: goods,
        keys: {}
    },
    reducers: {
        addKey: (state, data) => {
            state.keys[data.payload] ? state.keys[data.payload]++ : state.keys[data.payload] = 1;
        },
        reduceKey: (state, data) => {
            if (state.keys[data.payload]) {
                state.keys[data.payload] === 1 ? delete state.keys[data.payload] : state.keys[data.payload]--;
            }
        },
        deleteKeys: state => {
            for (let key in state.keys) {
                delete state.keys[key];
            }
        },
    }
})

export const { addKey, reduceKey, deleteKeys } = goodsSlice.actions;

export default goodsSlice.reducer;