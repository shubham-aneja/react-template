import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import './products.scss';

export default class Products extends PureComponent {

  static defaultProps = {
    categories: [],
    error: '',
    loading: false,
    history: {
      push: ()=> {
      }
    },
    productListFetchProducts: ()=> {
    },
    productListDestroy: ()=> {
    }
  };

  static propTypes = {
    products: PropTypes.array.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    productListFetchProducts: PropTypes.func,
    productListDestroy: PropTypes.func
  };

  componentWillUnmount() {
    const {productListDestroy} = this.props;
    productListDestroy();
  }

  componentDidMount() {
    const {productListFetchProducts} = this.props;
    productListFetchProducts();
  }

  render() {
    const {error, loading, location, products} = this.props || {};
    const {query} = location || {};
    return (<div>
        {loading && <h2>Loading...</h2>}
        {products.map(product=> {
          return (<div key={product.id}>
            <h2>{product.name}</h2>
          </div>)
        })}
        {JSON.stringify()}
        {JSON.stringify(query)}
        {error && <div className='error-container'>
          <h3>{error}</h3>
        </div>}
      </div>
    )

  }
}
