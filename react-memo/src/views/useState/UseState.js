import { Component } from 'react';

import FunctionStateDemo from './components/FunctionStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import UseEffectFetchApiDemo from './components/UseEffectFetchApiDemo';
import FetchApiPractice from './components/FetchApiPractice';
import TextboxOnChangeEventHandler from './components/TextboxOnChangeEventHandler';

export default class UseState extends Component {
  render() {
    return (<>
      <FunctionStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <UseEffectFetchApiDemo />
      <hr />
      <FetchApiPractice />
      <hr />
      <TextboxOnChangeEventHandler />
    </>);
  }
}
