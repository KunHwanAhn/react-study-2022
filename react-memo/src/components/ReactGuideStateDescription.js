import { Component } from 'react';

export default class ReactGuideStateDescription extends Component {
  constructor() {
    super();

    this.state = {
      title: 'StateDescription',
      message: 'State 개체를 사용하여 클래스 컴포넌트에서 상태 관리',

    };
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <h3>{this.state.message}</h3>
      </>
    );
  }
}
