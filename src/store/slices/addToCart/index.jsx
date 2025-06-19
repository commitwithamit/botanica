import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "addToCart",
    initialState: {
        totalItems: 0,
        totalMrp: 0,
        totalSp: 0,
        selectedItems: [],

        //addons
        platformFee: 0,
        deliverCharges: 0
    },
    reducers: {
        addItem: (state, action) => {
            console.log("action: ", action.payload);
            let itemExist = state.selectedItems.some((pro) => pro.id === action.payload.id);
            if (!itemExist) {
                if(action.payload.quantity){
                    state.selectedItems.push({...action.payload});
                }else{
                    state.selectedItems.push({...action.payload, quantity:1});
                }
                state.totalItems += 1; 
                state.totalMrp = state.selectedItems.reduce((prev, curr)=> prev + curr.mrp,0);
            }
        },
        removeItem: {},
        increaseQuantity: {},
        decreaseQuantity: {},
    }
});

// function calculateMrpAndSp(mrp, sp){
//     let 
// }
// console.log(state.selectedProducts);

export const { addItem } = cartReducer.actions;
export default cartReducer.reducer;