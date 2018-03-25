import React, { Component } from 'react';
import './AddTask.css';
import Actions from '../../redux/actions/index'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class AddTask extends Component {
    constructor(p) {
        super(p);
        this.state = {
            newTaskTitle: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);
    }

    onSubmit() {
        this.setState({newTaskTitle: ''});
        const {onTaskInsert} = this.props;
        onTaskInsert(this.state.newTaskTitle)
    }

    onTextUpdate(e) {
        this.setState({newTaskTitle: e.target.value});
    }

    render() {
        return (
            <div >
                <div>Add a task from here</div>
                <input value={this.state.newTaskTitle} onChange={this.onTextUpdate}/>

                <div onClick={this.onSubmit}>Add task</div>
            </div>
        );
    }
}

AddTask.propTypes = {
    onTaskInsert: PropTypes.func.isRequired
};
AddTask.defaultProps = {
    onTaskInsert: ()=>{}
};


const mapStateToProps = ()=>({});
const mapDispatchToProps = (dispatch)=> {

    return {
        onTaskInsert: (title)=> {
            dispatch(Actions.taskAddTask({title}))
        }
    }
};
AddTask = connect(mapStateToProps, mapDispatchToProps)(AddTask)

export default AddTask;
