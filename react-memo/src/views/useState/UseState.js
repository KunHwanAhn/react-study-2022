import { Component } from 'react';

import FunctionStateDemo from './components/FunctionStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import UseEffectFetchApiDemo from './components/UseEffectFetchApiDemo';

export default class UseState extends Component {
  render() {
    return (<>
      <FunctionStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <UseEffectFetchApiDemo />
      <hr />
    </>);
  }
}
