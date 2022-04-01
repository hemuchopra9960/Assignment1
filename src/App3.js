import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>{this.state.clicks}</button>
      </div>
    );
  }
}

export default App;