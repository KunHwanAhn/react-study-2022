import { Component } from 'react';

import ReactGuideContactDetail from './details/ReactGuideContactDetail';

export default class ReactGuideContact extends Component {
  render() {
    const title = 'Contact';

    return (
      <>
        <h1>{title}</h1>
        <ReactGuideContactDetail />

        <div className='alert alert-warning alert-dismissible'>
          <button
            type='button'
            className='btn btn-close'
            data-dismiss='alert'
            aria-hidden='true'
          />
          이 사이트 제작을 위한 모든 단계는 <strong>인프런</strong>에서 동영상 강좌로 제공합니다.
          관심있으신 분들은&nbsp;
          <a
            href='https://www.inflearn.com/'
            target="_blank"
            rel="noopener noreferrer"
            className='alert-link'
          >
            인프런 사이트
          </a>를 참조하시기 바랍니다.
        </div>
      </>
    );
  }
}
