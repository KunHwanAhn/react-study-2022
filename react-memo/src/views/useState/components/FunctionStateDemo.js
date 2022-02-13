import { useState } from 'react';

export default function FUnctionStateDemo() {
  const [ myMessage, setMyMessage ] = useState('Hi');

  // useState()를 사용하여 함수형 컴포넌트에서 상태 관리
  return (<>
    <h3>{ myMessage }</h3>
    <button
      className="btn btn-secondary"
      onClick={ () => setMyMessage('Hello')}
    >
      Hello
    </button>
    <button
      className="ms-1 btn btn-secondary"
      onClick={ () => setMyMessage('Bye')}
      >
        Bye
      </button>
  </>);
}
