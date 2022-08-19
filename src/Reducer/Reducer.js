const initialState = {
    cartValue: 0,
    data: [],
}


const buttonClickReducer = (state = initialState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case "ADD_CART":
            return {
                cartValue: state.cartValue +1,
                data: [...state.data,action.payload],
            }
        
        default: return state;
    }
}

export default buttonClickReducer