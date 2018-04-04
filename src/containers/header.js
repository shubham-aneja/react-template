import {loginDoLogout} from '../redux/actions'
import {connect} from 'react-redux';

import {Header} from '../components/'

const mapStateToProps = ()=>({});
const mapDispatchToProps = {
        onLogout: loginDoLogout
};

const ConnectedAddTask = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedAddTask
