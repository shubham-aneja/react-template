import React, { PureComponent} from 'react';
import './planetsList.scss';

export default class PlanetsList extends PureComponent {
    render(){
        return (<div>
            Value is: {this.props.value}
            Planets list
        </div>)
    }
}