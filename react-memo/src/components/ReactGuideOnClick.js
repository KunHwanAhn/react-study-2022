import { Component } from 'react';

function handleClick() {
  console.log('함수 직접 호출');
}

function FunctionOnClick() {
  return (
    <>
      <h1>Functon onClick Handler</h1>
      <button
        className='btn btn-secondary'
        onClick={() => { console.log('무명 메서드 호출'); }}
      >
        무명 메서드 호출
      </button>

      <button
        className='ms-2 btn btn-secondary'
        onClick={handleClick}
      >
        함수 직접 호출
      </button>
    </>
  );
}

class ClassOnClick extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Class onClick Handler',
      btnText: '클래스 클릭 테스트',
    };
  }

  clickHandler() {
    console.log('클래스 클릭 테스트');
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <button
          className='btn btn-secondary'
          onClick={this.clickHandler}
        >
          {this.state.btnText}
        </button>
      </>
    );
  }
}


export default class ReactGuideOnClick extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          <FunctionOnClick />
        </div>
        <div className='col-md-4'>
          <ClassOnClick />
        </div>
      </div>
    );
  }
}
