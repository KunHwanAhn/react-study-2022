import { Component } from 'react';

import FunctionStateDemo from './components/FunctionStateDemo';
import UseEffectDemo from './components/UseEffectDemo';

export default class UseState extends Component {
  render() {
    return (<>
      <h1>FunctionStateDemo Component</h1>
      <FunctionStateDemo />
      <hr />
      <h1>UseEffectDemo Component</h1>
      <UseEffectDemo />
      <hr />
    </>);
  }
}
