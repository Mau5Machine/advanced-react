import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    answer: 42
  };

  asyncFunc = () => {
    return Promise.resolve(32);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return <h2>Helllo React {this.state.answer}</h2>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
