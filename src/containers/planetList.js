import {connect} from 'react-redux'
import {PlanetList} from '../components/'
import {planetListSelectItem, planetListSetError, planetListSetLoading, planetListDestroy , planetListSetPlanets, planetListFetchPlanets} from '../redux/actions'
import toJS  from '../hoc/toJS'

const mapStateToProps = (state, ownProps)=> {
    const planetListState = state.get('planetList');
    console.log('111 555 planet list state', planetListState);
    let planets = planetListState.get('planets');
    return {
        loading: planetListState.get('loading'),
        error: planetListState.get('error'),
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

const ConnectedPlanetList = connect(mapStateToProps, mapDispatchToProps)(toJS(PlanetList));

export default ConnectedPlanetList
