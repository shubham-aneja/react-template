//import {taskAddTask} from '../redux/actions/index'
import {connect} from 'react-redux';

import {AddTask} from '../components/'

const mapStateToProps = ()=>({});
const mapDispatchToProps = (dispatch)=> {
    return {
        onTaskInsert: (title)=> {
            //dispatch(taskAddTask({title}))
        }
    }
};

const ConnectedAddTask = connect(mapStateToProps, mapDispatchToProps)(AddTask);

export default ConnectedAddTask
