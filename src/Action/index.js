export const onAddToCart =(data)=>{
    return {
        type: "ADD_CART",
        payload: data,
    }
}