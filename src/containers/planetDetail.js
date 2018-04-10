import {connect} from 'react-redux'
import {PlanetDetail} from '../components/'
import toJS  from '../hoc/toJS'

import {
    planetDetailGetInfo,
    planetDetailDestroy

} from '../redux/actions/'

const mapStateToProps = state => {
    const planetDetailState = state.get('planetDetail');
    let planetInfo = planetDetailState.get('planetInfo');
    planetInfo = planetInfo && planetInfo;

    return {
        loading: planetDetailState.get('loading'),
        error: planetDetailState.get('error'),
        planetInfo
    }
};

const mapDispatchToProps = {
    planetDetailGetInfo,
    planetDetailDestroy
};


const ConnectedPlanetDetail = connect(mapStateToProps, mapDispatchToProps)(toJS (PlanetDetail));

export default ConnectedPlanetDetail
