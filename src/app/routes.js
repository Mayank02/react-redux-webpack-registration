import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './containers/Register';
import PageNotFound from './components/page-not-found';

export default (
	<Switch>
		<Route exact path="/" component={Register} />
		<Route exact path="/register" component={Register} />
		<Route path="*" component={PageNotFound} />
	</Switch>
);
