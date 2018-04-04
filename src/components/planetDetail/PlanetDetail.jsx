import React, { PureComponent} from 'react';
import './planetDetail.scss';

export default class PlanetDetail extends PureComponent {
    render() {
        const {routeParams} = this.props || {}
        const PlanetId = routeParams.id;
        console.log('111 222 planet detail', this.props);
        return (<div>
            Planet Detail {this.props.value} {PlanetId}
        </div>)

    }
}