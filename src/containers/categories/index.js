import {connect} from 'react-redux';
import {Categories} from '../../components'
import {categoryListFetchCategories, categoryListDestroy} from '../../redux/actions'
import toJS  from '../../hoc/toJS'

const mapStateToProps = (appState)=> {
  const catState = appState.get('categories');
  return {
    categories: catState.get('categories'),
    loading: catState.get('loading'),
    error: catState.get('error')
  }
};
const mapDispatchToProps = {
  categoryListFetchCategories,
  categoryListDestroy
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(toJS(Categories));

export default ConnectedCategories
