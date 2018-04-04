import Types from './types.js'
import {api} from '../../utils/api'

const PLANET_GET_URL = `https://swapi.co/api/planets`;


export const planetListSetError = (error)=> (
{
    type: Types.PLANET_LIST_SET_ERROR,
    error
}
);

export const planetListSetLoading = (loading)=> (
{
    type: Types.PLANET_LIST_SET_LOADING,
    loading
}
);
export const planetListDestroy = (loading)=> (
{
    type: Types.PLANET_LIST_DESTROY,
    loading
}
);

export const planetListSetPlanets = (planets)=> (
{
    type: Types.PLANET_LIST_SET_PLANETS,
    planets
}
);

export const planetListFetchPlanets = ()=> {

    return (dispatch)=> {
        dispatch(planetListSetError(""));
        dispatch(planetListSetLoading(true));
        api(PLANET_GET_URL).then(response=> {
            dispatch(planetListSetLoading(false));
            const { results } = response;
            dispatch(planetListSetPlanets(results));
        }).catch(e=> {
                dispatch(planetListSetLoading(false));
                dispatch(planetListSetError("Something went wrong"));
            }
        )
    }
};
