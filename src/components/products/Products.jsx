import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import './products.scss';
import queryString from'query-string';

export default class Products extends PureComponent {

  static defaultProps = {
    products: [],
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
    this.fetchProducts()
  }

  getCategoryId(props = this.props) {
    const {location} = props || {};
    const parsedQuery = queryString.parse(location.search);
    return parsedQuery.categoryId;
  }

  fetchProducts(categoryId = this.getCategoryId()) {
    const {productListFetchProducts} = this.props;
    productListFetchProducts(categoryId);
  }

  componentWillReceiveProps(newProps, newState) {
    const prevCategory = this.getCategoryId();
    const currentCategory = this.getCategoryId(newProps);

    if (prevCategory !== currentCategory) {
      console.log('categories changed... updating products...');
      this.fetchProducts(currentCategory);
    }
  }

  render() {
    const {error, loading, products} = this.props || {};
    const categoryId = this.getCategoryId();
    return (<div>
        {loading && <h2>Loading...</h2>}
        <h2>Displaying the products for category id {categoryId}</h2>
        {products.map(product=> {
          return (<div key={product.id}>
            <h2>{product.name}</h2>
          </div>)
        })}
        {error && <div className='error-container'>
          <h3>{error}</h3>
        </div>}
      </div>
    )

  }
}
