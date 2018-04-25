import {loginDoLogout} from '../redux/actions'
import {connect} from 'react-redux';

import {Header} from '../components/'

const mapStateToProps = ()=>({});
const mapDispatchToProps = {
        onLogout: loginDoLogout
};
const mergeAllProps = (stateProps, dispatchProps, ownProps)=>{
        return {
                ...stateProps,
                ...dispatchProps,
                ...ownProps,
                onLogout:()=>{
                        console.log('111 777 logout called in header ontainer....')
                        dispatchProps.onLogout(ownProps.history.push)
                }
        }
}
const ConnectedAddTask = connect(mapStateToProps, mapDispatchToProps, mergeAllProps)(Header);

export default ConnectedAddTask
