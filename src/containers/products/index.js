import {connect} from 'react-redux';
import {Products} from '../../components'
import {productListFetchProducts, productListDestroy} from '../../redux/actions'
import toJS  from '../../hoc/toJS'

const mapStateToProps = (appState)=> {
  const catState = appState.get('products');
  return {
    products: catState.get('products'),
    loading: catState.get('loading'),
    error: catState.get('error')
  }
};

const mapDispatchToProps = {
  productListFetchProducts,
  productListDestroy
};

const ConnectedProducts = connect(mapStateToProps, mapDispatchToProps)(toJS(Products));

export default ConnectedProducts
