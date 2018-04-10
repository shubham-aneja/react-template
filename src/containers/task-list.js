import {connect} from 'react-redux';

import {TaskList} from '../components/'
import toJS  from '../hoc/toJS'

const mapStateToProps = (state, ownProps)=> {
    const tasksState = state.get('tasks');
    return {
        tasks: tasksState
    }
};

const ConnectedList = connect(mapStateToProps)(toJS (TaskList));

export default ConnectedList
