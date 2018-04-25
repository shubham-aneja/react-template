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
const mergeAllProps = (stateProps, dispatchProps, ownProps)=> {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onLogin: (payload)=> {
      dispatchProps.onLogin({...payload,pushFunction: ownProps.history.push})
    }
  }
};

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps, mergeAllProps)(Login);

export default ConnectedLogin
