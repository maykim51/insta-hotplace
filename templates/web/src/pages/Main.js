import React from 'react';
import Header from './../containers/Header';
import SearchResult from './../containers/SearchResult';
import SearchResultNone from './../containers/SearchResultNone';
import Detail from './../containers/Detail';
import { Route, BrowserRouter as Router} from 'react-router-dom';

function Main(props) {
  return (
    <Router>
      <Header
        query={props.query}
        onChange={props.onChange}
        inputClear={props.inputClear}
        onClickSgt={props.onClickSgt}
      />
      <Route exact path="/search/:query" render={() => (
                                          <SearchResult
                                              keyword={props.query}/>
        )}
      />
      <Route exact path="/sorry" render={() => (
                                          <SearchResultNone
                                              query={props.query}
                                              onChange={props.onChange}
                                              inputClear={props.inputClear}
                                              onClickSgt={props.onClickSgt}/>)} />
      <Route exact path="/search/:query/:name" component={Detail} />
    </Router>
  );
}

export default Main;
