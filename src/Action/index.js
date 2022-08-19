//file used to trigger an action and connected with reducer via redux store
export const onAddToCart = (data) => {
    return {
        type: "ADD_CART",
        payload: data,
    }
}