import { Component } from 'react';

export default class CrudIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
    };
  }

  render() {
    return (<>
      <div>
        <h1>CRUD</h1>
        <h3>리액트를 사용한 CRUD 예제 프로젝트입니다.</h3>
      </div>
    </>);
  }
}
