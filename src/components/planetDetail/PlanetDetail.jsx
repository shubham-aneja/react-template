import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import './planetDetail.scss';

export default class PlanetDetail extends PureComponent {
    static defaultProps = {
        loading: false,
        error: '',
        planetInfo: {},
        planetDetailGetInfo: ()=> {
        },
        planetDetailDestroy: ()=> {
        }

    };

    static propTypes = {
        planetInfo: PropTypes.shape({
            name: PropTypes.string,
            gravity: PropTypes.string,
            surface_water: PropTypes.string,
            population: PropTypes.string,
            orbital_period: PropTypes.string,
            rotation_period: PropTypes.string,
            diameter: PropTypes.string

        }),
        error: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        planetDetailDestroy: PropTypes.func.isRequired,
        planetDetailGetInfo: PropTypes.func.isRequired
    };


    componentDidMount() {
        const {planetDetailGetInfo, match:{params}} = this.props;
        const PlanetId = params.id;
        planetDetailGetInfo(PlanetId);
    }

    componentWillUnmount() {
        this.props.planetDetailDestroy();
    }

    render() {
        const {planetInfo, error, loading} = this.props || {}
        const errorRenderer = (
            <div className="planet-detail__error-container">
                <h2 >
                    {error}
                </h2>
            </div>
        );
        const loadingRenderer = (<div><h2>Loading...</h2></div> )
        const planetInfoRendered = (
            <div>
                <h2>{planetInfo.name}</h2>
                <ul>
                    <li>
                        <h3>
                            <div>Gravity: {planetInfo.gravity}</div>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <div>Surface_water: {planetInfo.surface_water}</div>

                        </h3>
                    </li>
                    <li>
                        <h3>
                            <div>Population: {planetInfo.population}</div>

                        </h3>
                    </li>
                    <li>
                        <h3>
                            <div>Rotation period: {planetInfo.rotation_period}</div>

                        </h3>
                    </li>
                    <li>
                        <h3>
                            <div>Orbital period: {planetInfo.orbital_period}</div>

                        </h3>
                    </li>
                    <li>
                        <h3>
                            <div>Diameter: {planetInfo.diameter}</div>

                        </h3>
                    </li>
                </ul>
            </div>
        );
        return (<div>
            {errorRenderer}
            {loading ? loadingRenderer : planetInfoRendered}
        </div>)

    }
}