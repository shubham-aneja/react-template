import {connect} from 'react-redux'
import {PlanetDetail} from '../components/'
import {
    planetDetailGetInfo,
    planetDetailDestroy

} from '../redux/actions/'

const mapStateToProps = state => {
    const planetDetailState = state.planetDetail || {};
    const {loading, error, planetInfo} = planetDetailState;
    return {
        loading,
        error,
        planetInfo
    }
};

const mapDispatchToProps = {
    planetDetailGetInfo,
    planetDetailDestroy
};


const ConnectedPlanetDetail = connect(mapStateToProps, mapDispatchToProps)(PlanetDetail);

export default ConnectedPlanetDetail
