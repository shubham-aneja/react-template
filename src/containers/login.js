import {connect} from 'react-redux'
import {Login} from '../components/'
import {loginUserNameChange, loginPasswordChange, loginDoLogin, loginDestroy} from '../redux/actions/'

const mapStateToProps = (appState) => {
    const loginState = appState.login || {};

    return {
        username: loginState.username,
        password: loginState.password,
        error: loginState.error,
        isLoading: loginState.loading
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
