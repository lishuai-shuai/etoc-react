import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LeftMenu from './routes/public/LeftMenu';
import RoleSet from './routes/system/RoleSet';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
	    <Route path="/public/LeftMenu" exact component={LeftMenu} />
	    <Route path="/system/RoleSet" exact component={RoleSet} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
