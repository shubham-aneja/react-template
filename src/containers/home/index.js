import React, { PureComponent} from 'react';
import './Home.scss';
import {Header} from '../../containers'
import {NavBar, Footer} from '../../components'
import HomeRoute from './HomeRoute.jsx'


export default  class Home extends PureComponent {

  render() {
    return (
      <div className="home">
        <div className="home__headers">
          <Header history={this.props.history}></Header>
          <NavBar></NavBar>
        </div>
        <div className="home__body">
          <HomeRoute match={this.props.match} children={this.props.children}></HomeRoute>
        </div>
        <div className="home__footer">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}


