import Types from './types.js'

export const categoryListSetError = (error)=> (
{
    type: Types.CATEGORY_LIST_SET_ERROR,
    error
}
);

export const categoryListSetLoading = (loading)=> (
{
    type: Types.CATEGORY_LIST_SET_LOADING,
    loading
}
);
export const categoryListDestroy = (loading)=> (
{
    type: Types.CATEGORY_LIST_DESTROY,
    loading
}
);

export const categoryListFetchCategories = ()=> {

    return {
        type: Types.CATEGORY_LIST_FETCH_CATEGORIES
    };
};

export const categoryListSetCategories = (categories)=> {

    return {
        type: Types.CATEGORY_LIST_SET_CATEGORIES,
        categories
    };
};
