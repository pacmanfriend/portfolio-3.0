let defaultCart = {
    cartItems: []
}

export const cartReducer = (state = defaultCart, action) => {
    switch (action.type) {
        case"ADD_ITEM": {
            return {...state, cartItems: [...state.cartItems, action.payload]}
        }
        case"REMOVE_ITEM": {
            return {...state, cartItems: state.cartItems.filter(item => item.name !== action.payload)}
        }
        case"REMOVE_ITEMS": {
            return {...state, cartItems: []}
        }
        default:
            return state;
    }
}