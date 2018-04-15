import Types from './types.js'

export const planetDetailSetError = (error)=> (
{
    type: Types.PLANET_DETAIL_SET_ERROR,
    error
}
);

export const planetDetailSetLoading = (loading)=> (
{
    type: Types.PLANET_DETAIL_SET_LOADING,
    loading
}
);
export const planetDetailSetDetails = (planetInfo)=> (
{
    type: Types.PLANET_DETAIL_SET_PLANET_DETAILS,
    planetInfo
}
);
export const planetDetailDestroy = (loading)=> (
{
    type: Types.PLANET_DETAIL_DESTROY,
    loading
}
);

export const planetDetailGetInfo = (planetId)=> {
return {
    type: Types.PLANET_DETAIL_FETCH_PLANET_DETAILS,
    planetId

};
};
