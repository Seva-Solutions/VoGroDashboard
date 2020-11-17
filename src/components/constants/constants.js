import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, IndexRoute} from 'react-router';

// COMPONENT
import Tasks from '../Tasks/tasks';
import { Switch } from '@material-ui/core';
// import Contact from './components/ContactSection/Contact';


export default (
 
    <Switch>
        <Route path='/task'>
            <Tasks />
        </Route>

    </Switch>
);