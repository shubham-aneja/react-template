import React from 'react';
import { Route} from 'react-router-dom'
import {Products} from '../../containers'

export default ()=> (
  <div>Hello dashboard products.
    <Route path="/home/dashboard/products" component={Products}></Route>
    <Route path="/home/dashboard/category/:id" component={(p)=>(<div>Category ... {p.match.params.id}...</div>)}></Route>
    <Route path="/home/dashboard/product/:id" component={(p)=>(<div>Product with ID: {p.match.params.id}...</div>)}></Route>
    <Route path="/home/dashboard/add-product" component={()=>(<div>Adding new product </div>)}></Route>
    <Route path="/home/dashboard/add-category" component={()=>(<div>Adding new category</div>)}></Route>
  </div>
)

