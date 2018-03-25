import React, { Component} from 'react';
import PropTypes from 'prop-types'
import './Home.css';
import {connect} from 'react-redux';
class Home extends Component {
    render() {
        const { tasks } = this.props;
        console.log('tasks ', tasks)
        return (
            <div className="Home-app">
                <div>Home</div>
                <ol>
                    {tasks && tasks.map(task => {
                        return (<li key={task.id}>{task.title}</li>)
                    })}
                </ol>
            </div>
        );
    }
}

Home.defaultProps = {
    tasks: []
}
Home.propTypes = {
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
Home = connect(mapStateToProps)(Home)
export default Home;
