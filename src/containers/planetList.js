import {connect} from 'react-redux'
import {PlanetList} from '../components/'
import {planetListSelectItem, planetListSetError, planetListSetLoading, planetListDestroy , planetListSetPlanets, planetListFetchPlanets} from '../redux/actions'

const mapStateToProps = (state, ownProps)=> {
    const planetListState = state.planetList || {};
    const {loading, error, planets} = planetListState;
    return {
        loading,
        error,
        planets
    }
};

const mapDispatchToProps = {
    planetListSetError,
    planetListSetLoading,
    planetListDestroy,
    planetListSetPlanets,
    planetListGetPlanets: planetListFetchPlanets,
    planetListSelectItem
};

const ConnectedPlanetList = connect(mapStateToProps, mapDispatchToProps)(PlanetList);

export default ConnectedPlanetList
