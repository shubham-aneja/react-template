import React, { PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types'

export default class Categories extends PureComponent {
  static defaultProps = {
    categories: [],
    error: '',
    loading: false,
    history: {
      push: ()=> {
      }
    },
    categoryListFetchCategories: ()=> {
    },
    categoryListDestroy: ()=> {
    }
  };
  
  static propTypes = {
    categories: PropTypes.array.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    categoryListFetchCategories: PropTypes.func,
    categoryListDestroy: PropTypes.func
  };
  
  state = {
    showSubcategoriesForIds: []
  };

  componentDidMount() {
    const {categoryListFetchCategories  } = this.props;
    /*categoryListFetchCategories will be available to only top level category, so check is needed*/
    if (categoryListFetchCategories)
      categoryListFetchCategories()
  }

  onItemPress = (e, category)=> {
    const {history}= this.props;
    if (!category.subCategories || this.state.showSubcategoriesForIds.includes(category.id)) {
      history.push('/home/dashboard/products?id=' + category.id)
    } else {
      this.setState((state)=> {
        const updatedArray = [ ...state.showSubcategoriesForIds, category.id ]
        return {
          showSubcategoriesForIds: updatedArray
        }
      });

    }
    e.preventDefault();
    e.stopPropagation();
  };


  componentWillUnmount() {
    const {categoryListDestroy} = this.props;
    /*categoryListDestroy will be available to only top level category, so check is needed*/
    if (categoryListDestroy) {
      categoryListDestroy()
    }
  }

  render() {
    const {categories, history, loading, error} = this.props;
    const {showSubcategoriesForIds } = this.state;
    return (
      <div>
        {loading && <h2>Loading...</h2>}
        <ul>
          {categories.map(cat=> {
            const parentList = <li onClick={(e)=>this.onItemPress(e, cat)} key={cat.id}>{cat.name}</li>
            let childList = null;
            if (cat.subCategories && showSubcategoriesForIds.includes(cat.id)) {
              childList = (<Categories
                categories={cat.subCategories}
                history={history}
                />)
            }
            return (
              <Fragment key={`con${cat.id}`}>
                <Fragment>
                  {parentList}
                </Fragment>
                <Fragment>
                  {childList}
                </Fragment>
              </Fragment>
            )
          })}
        </ul>
        {error && <div className='error-container'>
          <h3>{error}</h3>
        </div>}
      </div>)
    
  }
}