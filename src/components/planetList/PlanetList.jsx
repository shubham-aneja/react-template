import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import './planetList.scss';

export default class PlanetsList extends PureComponent {
    static defaultProps = {
        planets: [],
        error: '',
        loading: false,
        planetListGetPlanets: ()=>{},
        planetListDestroy: ()=>{},
    };

    static propTypes = {
        planets: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            gravity: PropTypes.string.isRequired,
            surface_water: PropTypes.string.isRequired,
            population: PropTypes.string.isRequired
        })),
        error: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        planetListGetPlanets: PropTypes.func.isRequired,
        planetListDestroy: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const {planetListGetPlanets} = this.props;
        planetListGetPlanets();
    }

    renderPlanet(planet) {
        return (
            <div key={planet.name} className='planetList__planet-item'>
                <div>Name: {planet.name}</div>
                <div>gravity: {planet.gravity}</div>
                <div>surface_water: {planet.surface_water}</div>
                <div>population: {planet.population}</div>
            </div>
        )
    }


    componentWillUnmount() {
        this.props.planetListDestroy();
    }

    render() {
        const {planets, error, loading} = this.props;
        return (<div>
            <div className="planetList__error-container">
                <h2 >
                    {error}
                </h2>
            </div>
            {loading ? <div><h2>Loading...</h2></div> : planets.map(this.renderPlanet)}
        </div>)

    }
}