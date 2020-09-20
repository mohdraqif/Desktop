import React, { Component } from 'react';

export default class DemoContainer extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    console.log('Container Mounted!')
  }

  componentDidUpdate() {
    console.log('Container Updated!')
  }

  increase = () => {
    const newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  decrease = () => {
    // this.setState({count: this.state.count - 1})
    const newCount = this.state.count - 1 
    this.setState({count: newCount})
  }

  reset = () => {
    this.setState({count: 0})
  }

  render() {
    return (
      <div> 
        <h1>Container Count : {this.state.count}</h1>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}