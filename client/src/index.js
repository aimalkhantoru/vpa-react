import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BidOrganizer} from './components/bid-organazier'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((

<Router>
    <div>
        <Route exact={true} path= "/" component={App}/>
        <Route path="/bid" component={BidOrganizer}/>
    </div>
</Router>
),
document.getElementById('root'));
registerServiceWorker();
