import {connect} from 'react-redux';

import {TaskList} from '../components/'

const mapStateToProps = (state, ownProps)=> {
    const tasksState = state.tasks;
    return {
        tasks: tasksState
    }
};

const ConnectedList = connect(mapStateToProps)(TaskList);

export default ConnectedList
