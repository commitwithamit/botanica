import { createSlice } from "@reduxjs/toolkit";

const localSelelctedItems = localStorage.getItem("selectedItems") !== null ? JSON.parse(localStorage.getItem("selectedItems")) : [];
const localTotalItem = localStorage.getItem("totalItems") !== null ? JSON.parse(localStorage.getItem("totalItems")) : 0;
const localMrp = localStorage.getItem("totalMrp") !== null ? JSON.parse(localStorage.getItem("totalMrp")) : 0;
const localSp = localStorage.getItem("totalSp") !== null ? JSON.parse(localStorage.getItem("totalSp")) : 0;

const cartReducer = createSlice({
    name: "addToCart",
    initialState: {
        totalItems: localTotalItem,
        totalMrp: localMrp,
        totalSp: localSp,
        selectedItems: localSelelctedItems,

        //addons
        platformFee: 0,
        deliverCharges: 0,

        notification: null
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

                state.notification = { type: "success", msg: "Plant added to your cart!" };
            } else {
                state.notification = { type: "info", msg: "Plant is already in your cart." };
            }

            saveToLocalStorage(state);
            
        },
        removeItem: (state, action) => {
            let itemExist = state.selectedItems.findIndex(val => val.id === action.payload);
            if (itemExist !== -1) {
                state.selectedItems.splice(itemExist, 1);
                state.totalItems -= 1;
                calculateMrpAndSp(state);
                calculateOtherCharges(state);
            }
            saveToLocalStorage(state);
        },
        incQuantity: (state, action) => {
            let itemExist = state.selectedItems.find(val => val.id === action.payload);
            if (itemExist) {
                itemExist.quantity += 1;
                calculateMrpAndSp(state);
                calculateOtherCharges(state);
            }
            saveToLocalStorage(state);
        },
        decQuantity: (state, action) => {
            let itemExist = state.selectedItems.find(val => val.id === action.payload);
            if (itemExist && itemExist.quantity > 1) {
                itemExist.quantity -= 1;
                calculateMrpAndSp(state);
                calculateOtherCharges(state);
            }
            saveToLocalStorage(state);
        },
        clearNotification: (state) => {
            state.notification = null;
        }
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

function saveToLocalStorage(state) {
    // saving to localStorage (for persistance cart data after refreshing)
    localStorage.setItem("selectedItems", JSON.stringify(state.selectedItems));
    localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
    localStorage.setItem("totalMrp", JSON.stringify(state.totalMrp));
    localStorage.setItem("totalSp", JSON.stringify(state.totalSp));
}

export const { addItem, removeItem, incQuantity, decQuantity, clearNotification } = cartReducer.actions;
export default cartReducer.reducer;