import {connect} from 'react-redux'
import {Login} from '../components/'
import {loginUserNameChange, loginPasswordChange, loginDoLogin, loginDestroy} from '../redux/actions/'

const mapStateToProps = (appState) => {
    const loginState = appState.get('login');

    return {
        username: loginState.get('username'),
        password: loginState.get('password'),
        error: loginState.get('error'),
        isLoading: loginState.get('loading')
    }
};

const mapDispatchToProps = {
    onUsernameChange: loginUserNameChange,
    onPasswordChange: loginPasswordChange,
    onLogin: loginDoLogin,
    loginDestroy
};


const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectedLogin
