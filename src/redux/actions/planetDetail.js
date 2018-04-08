import Types from './types.js'
import {api} from '../../utils/api'

const PLANET_GET_URL = `https://swapi.co/api/planets/`;


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

export const planetDetailGetInfo = (id)=> {

    return (dispatch)=> {
        dispatch(planetDetailSetError(""));
        dispatch(planetDetailSetLoading(true));
        api(PLANET_GET_URL+id).then(response=> {
            dispatch(planetDetailSetLoading(false));
            dispatch(planetDetailSetDetails(response));
        }).catch(e=> {
                dispatch(planetDetailSetLoading(false));
                dispatch(planetDetailSetError("Something went wrong"));
            }
        )
    }
};
