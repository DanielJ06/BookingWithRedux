import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Booking from './pages/Booking';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/booking" component={Booking} />
        </Switch>
    );
}

export default Routes;