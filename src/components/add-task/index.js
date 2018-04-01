import React, { Component } from 'react';
import './AddTask.css';
import PropTypes from 'prop-types'

export default class AddTask extends Component {


    static propTypes = {
        onTaskInsert: PropTypes.func.isRequired
    };

    static defaultProps = {
        onTaskInsert: ()=> {
        }
    };

    constructor(p) {
        super(p);
        this.state = {
            newTaskTitle: ''
        };
    }

    onSubmit = _=> {
        this.setState({newTaskTitle: ''});
        const {onTaskInsert} = this.props;
        onTaskInsert(this.state.newTaskTitle)
    };

    onTextUpdate = (e)=> {
        this.setState({newTaskTitle: e.target.value});
    };

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
