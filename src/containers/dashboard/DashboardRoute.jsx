import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import {Products} from '../../containers'

export default ({url})=> (
  <Switch>
    <Route exact path={`${url}/products`} component={Products}></Route>
    <Route exact path={`${url}/category/:id`} component={(p)=>(<div>Category ... {p.match.params.id}...</div>)}></Route>
    <Route exact path={`${url}/product/:id`} component={(p)=>(<div>Product with ID: {p.match.params.id}...</div>)}></Route>
    <Route exact path={`${url}/add-product`} component={()=>(<div>Adding new product </div>)}></Route>
    <Route exact path={`${url}/add-category`} component={()=>(<div>Adding new category</div>)}></Route>
    <Redirect exact path='*' to={`${url}/products`} />
  </Switch>
)

