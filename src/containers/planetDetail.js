import {connect} from 'react-redux'
import {PlanetDetail} from '../components/'
//import {loginUserNameChange, loginPasswordChange, loginDoLogin, loginDestroy} from '../redux/actions/'

const mapStateToProps = state => {
    return {value: 10}
};

const mapDispatchToProps = {};


const ConnectedPlanetDetail = connect(mapStateToProps, mapDispatchToProps)(PlanetDetail);

export default ConnectedPlanetDetail
