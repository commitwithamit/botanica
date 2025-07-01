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
            let itemExist = state.selectedItems.some((pro) => pro.id === action.payload.id);
            if (!itemExist) {
                if (action.payload.quantity) {
                    state.selectedItems.push({ ...action.payload });
                } else {
                    state.selectedItems.push({ ...action.payload, quantity: 1 });
                }
                state.totalItems += 1;
                calculateMrpAndSp(state);
                calculateOtherCharges(state);
            }
        },
        removeItem: (state, action) => {
            let itemExist = state.selectedItems.findIndex(val => val.id === action.payload);
            if (itemExist !== -1) {
                state.selectedItems.splice(itemExist, 1);
                state.totalItems -= 1;
                calculateMrpAndSp(state);
                calculateOtherCharges(state);
            }

        },
        incQuantity: (state, action) => {
            let itemExist = state.selectedItems.find(val => val.id === action.payload);
            if (itemExist) {
                itemExist.quantity += 1;
                calculateMrpAndSp(state);
                calculateOtherCharges(state);
            }
        },
        decQuantity: (state, action) => {
            let itemExist = state.selectedItems.find(val => val.id === action.payload);
            if (itemExist && itemExist.quantity > 1) {
                itemExist.quantity -= 1;
                calculateMrpAndSp(state);
                calculateOtherCharges(state);
            }
        },
    }
});

function calculateMrpAndSp(state) {
    state.totalMrp = state.selectedItems.reduce((prev, curr) => prev + curr.mrp * curr.quantity, 0);
    state.totalSp = state.selectedItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
}
function calculateOtherCharges(state) {
    const hasItems = state.selectedItems.length > 0;
    const totalSp = state.totalSp;

    // delivery charges
    state.deliverCharges = !hasItems || totalSp > 2999 ? 0 : 115;
    // platform fee
    state.platformFee = hasItems ? 15 : 0;

    // old logic
    // if (state.totalSp > 2999 && state.selectedItems.length > 0) {
    //     state.deliverCharges = 0;
    // } else if (state.selectedItems.length === 0) {
    //     state.deliverCharges = 0;
    // } else if (state.totalSp < 2999 && state.selectedItems.length > 0) {
    //     state.deliverCharges = 115;
    // }

    // state.platformFee = state.selectedItems.length > 0 ? 15 : 0;
}

export const { addItem, removeItem, incQuantity, decQuantity } = cartReducer.actions;
export default cartReducer.reducer;