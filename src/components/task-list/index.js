import React, { Component} from 'react';
import PropTypes from 'prop-types'
import './TaskList.css';
import {connect} from 'react-redux';

class TaskList extends Component {
    render() {

        const { tasks } = this.props;
        return (
            <div className="TaskList-app">
                <ol>
                    {tasks && tasks.map(task => {
                        return (<li key={task.id}>{task.title}</li>)
                    })}
                </ol>
            </div>
        );
    }
}

TaskList.defaultProps = {
    tasks: []
}
TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape(
            {
                title: PropTypes.string,
                id: PropTypes.number.isRequired
            }
        ).isRequired
    ).isRequired
}

const mapStateToProps = (state, ownProps)=> {
    const tasksState = state.tasks
    return {
        tasks: tasksState
    }
}
TaskList = connect(mapStateToProps)(TaskList)
export default TaskList;
