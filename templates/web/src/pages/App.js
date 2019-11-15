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

  // 검색창에 입력한 값을 표시
  queryHandle = e => {this.setState({ query: e.target.value });};

  // 검색창에 입력한 값 지우기
  queryClearHandle = () => {this.setState({ query: '' });};

  // 키워드 자동완성 
  onClickSgt = keyword => {this.setState({ query: keyword });};

  render() {
    return (
      <div className="fullheight">
        <Router>
          <Route exact path="/" render={() => (
                                        <Intro
                                          query={this.state.query}
                                          onChange={this.queryHandle}
                                          inputClear={this.queryClearHandle}
                                          onClickSgt={this.onClickSgt}
                                        />
            )}
          />
          <Route path="/search/" render={() => (
                                        <Main
                                          query={this.state.query}
                                          onChange={this.queryHandle}
                                          inputClear={this.queryClearHandle}
                                          onClickSgt={this.onClickSgt}
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
