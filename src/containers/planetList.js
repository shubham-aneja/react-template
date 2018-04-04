import {connect} from 'react-redux'
import {PlanetList} from '../components/'
//import {loginUserNameChange, loginPasswordChange, loginDoLogin, loginDestroy} from '../redux/actions/'

const mapStateToProps = state => {
    return {value: 10}
};

const mapDispatchToProps = {};


const ConnectedPlanetList = connect(mapStateToProps, mapDispatchToProps)(PlanetList);

export default ConnectedPlanetList
