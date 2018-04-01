import React, { Component} from 'react';
import PropTypes from 'prop-types'
import './TaskList.scss';

export default class TaskList extends Component {

    static propTypes = {
        tasks: PropTypes.arrayOf(
            PropTypes.shape(
                {
                    title: PropTypes.string.isRequired,
                    id: PropTypes.number.isRequired
                }
            ).isRequired
        ).isRequired
    };

    static defaultProps = {
        tasks: []
    };

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



