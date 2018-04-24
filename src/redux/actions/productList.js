import Types from './types.js'



export const productListSetError = (error)=> (
{
    type: Types.PRODUCT_LIST_SET_ERROR,
    error
}
);

export const productListSetLoading = (loading)=> (
{
    type: Types.PRODUCT_LIST_SET_LOADING,
    loading
}
);
export const productListDestroy = (loading)=> (
{
    type: Types.PRODUCT_LIST_DESTROY,
    loading
}
);

export const productListSetProducts = (products)=> (
{
    type: Types.PRODUCT_LIST_SET_PRODUCTS,
    products
}
);

export const productListFetchProducts= ()=> {

    return {
        type: Types.PRODUCT_LIST_FETCH_PRODUCTS
    };
};
