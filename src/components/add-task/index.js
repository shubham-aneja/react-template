import React, { Component } from 'react';
import './AddTask.scss';
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
        if (this.state.newTaskTitle && this.state.newTaskTitle.trim().length > 0) {
            this.setState({newTaskTitle: ''});
            const {onTaskInsert} = this.props;
            onTaskInsert(this.state.newTaskTitle)

        }
    };

    onTextUpdate = (e)=> {
        this.setState({newTaskTitle: e.target.value});
    };

    onKeyUp = (e) => {
        if (e.which === 13) {
            this.onSubmit()
        }
    };

    render() {
        return (
            <div className='add-task'>
                <input onKeyUp={this.onKeyUp} placeholder='Add new task...' value={this.state.newTaskTitle}
                       onChange={this.onTextUpdate}/>

                <div onClick={this.onSubmit} className='add-task-action'>Add task</div>
            </div>
        );
    }
}
