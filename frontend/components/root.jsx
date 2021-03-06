import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import HomepageIndexContainer from './homepage/homepage_index_container';
import FullProjectContainer from './project/full_project_container';
import NewProjectFormContainer from './project/new_project_form_container';
import DiscoverContainer from './discover/discover_container';
import SearchContainer from './search/search_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
      window.scrollTo(0, 0);
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
      window.scrollTo(0, 0);
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ HomepageIndexContainer } />
          <Route path='/search/:searchPhrase' component={ SearchContainer } />
          <Route path='/discover' component={ DiscoverContainer } />
          <Route path='/login' component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path='/signup' component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path='/projects/:projectId' component={ FullProjectContainer } />
          <Route path='/new' component={ NewProjectFormContainer } onEnter={ _ensureLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
