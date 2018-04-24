import React, { PureComponent} from 'react';
import './Home.scss';
import {Header} from '../../containers'
import {NavBar, Footer} from '../../components'
import HomeRoute from './HomeRoute.jsx'


export default  class Home extends PureComponent {

    render() {
        console.log('aaa home props', this.props);
        const {router: history} = this.props;
        /*                           <Route path="inbox" component={Inbox}>
         <Route path="messages/:id" component={Message}/>

         </Route>*/
        return (
            <div className="home">
                <div className="home__headers">
                    <Header></Header>
                    <NavBar></NavBar>
                </div>
                <div className="home__body">
                        <HomeRoute history={history}></HomeRoute>
                </div>
                <div className="home__footer">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}


