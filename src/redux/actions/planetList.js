import Types from './types.js'

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

export const planetListSelectItem = (selectedPlanet, push)=> (dispatch)=> {
    const idRegex = /[0-9]+/;
    let id = selectedPlanet.url.match(idRegex);
    if (!selectedPlanet || !selectedPlanet.url || id === undefined || id === null) {
        dispatch(planetListSetError("No detail available for planet to get more info"))
    } else {
        push(`planet/` + id);
    }
};

export const planetListFetchPlanets = ()=> {

    return {
        type: Types.PLANET_LIST_FETCH_PLANETS
    };
    /*Important: This code has been moved to the respective saga*/
/*    return (dispatch)=> {
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
    }*/
};
