import {createSlice} from '@reduxjs/toolkit';
export const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            if(!state.some((productId)=>productId===action.payload)){
                alert('The product has been added to the cart')
                // console.log(`state is ${state} and action ${action.payload}`);
                return [...state,action.payload]


            }
            else{
                alert("Item already in the cart");
                return state;
            }
        },
        remove:(state,action)=>{
            state=state.filter(productId=>productId!==action.payload);
            return state;
        }
        
    }

})
export const {add,remove}=cartSlice.actions;
export const selectCart=(state)=>state.cart;
export default cartSlice.reducer;
