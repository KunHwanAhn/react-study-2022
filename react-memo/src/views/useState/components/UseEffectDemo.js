import { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  const [agree, setAgree] = useState(false);

  // NOTE: 모든 변경사항에서 호출됨.
  useEffect(() => {
    console.log('페이지 로드 또는 UI 변경');
  });

  // NOTE: 페이지 로드시에만 호출됨.
  useEffect(() => {
    console.log('페이지 로드');
  }, []);

  return (<>
    <h3>UseEffectDemo</h3>
    <div className='form-check'>
      <input
        className='form-check-input'
        type='checkbox'
        value={agree}
        checked={agree}
        onChange={() => setAgree(agree => !agree)}
      />
      <label
        className='form-check-label'
        onClick={() => setAgree(agree => !agree)}
      >
        { agree ? '동의함' : '동의하지 않음' }
      </label>
    </div>
  </>);
}
