import {connect} from 'react-redux'
import {PlanetList} from '../components/'
import {planetListSelectItem, planetListDestroy , planetListFetchPlanets} from '../redux/actions'
import toJS  from '../hoc/toJS'

const mapStateToProps = (state, ownProps)=> {
    const planetListState = state.get('planetList');
    let planets = planetListState.get('planets');
    return {
        loading: planetListState.get('loading'),
        error: planetListState.get('error'),
        planets
    }
};

const mapDispatchToProps = {
    planetListDestroy,
    planetListGetPlanets: planetListFetchPlanets,
    planetListSelectItem
};
const mergeConnectedProps = (stateProps, dispatchedProps, ownProps)=>{
    console.log('000 111 222', stateProps, dispatchedProps, ownProps);
    return {
        ...stateProps, ...dispatchedProps, ...ownProps,
        planetListSelectItem: (planetInfo) =>{
            dispatchedProps.planetListSelectItem(planetInfo, ownProps.history.push)
        }
    }
}
const ConnectedPlanetList = connect(mapStateToProps, mapDispatchToProps, mergeConnectedProps)(toJS(PlanetList));

export default ConnectedPlanetList
