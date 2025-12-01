export const initialState = {
    basket: []
};

// Selector -> Basket total
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

// Actual reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;
    }
};

export default reducer;
