import React, { Component } from 'react';
import Intro from './Intro';
import Main from './Main';
import Footer from './../components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  // Query Input & Delete
  queryHandle = e => {this.setState({ query: e.target.value });};
  queryClearHandle = () => {this.setState({ query: '' });};

  // Autocomplete by keyword suggestion
  pushQueryToInput = keyword => {this.setState({ query: keyword });};

  render() {
    return (
      <div className="fullheight">
        <Router>
          <Route exact path="/" render={() => (
                                        <Intro
                                          query={this.state.query}
                                          onChange={this.queryHandle}
                                          inputClear={this.queryClearHandle}
                                          pushQueryToInput={this.pushQueryToInput}
                                        />
            )}
          />
          <Route path="/search/" render={() => (
                                        <Main
                                          query={this.state.query}
                                          onChange={this.queryHandle}
                                          inputClear={this.queryClearHandle}
                                          pushQueryToInput={this.pushQueryToInput}
                                        />
            )}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
