import { Component, version } from 'react';

export default class ReactGuideAbout extends Component {
  render() {
    const title = 'About';
    const message = '안녕하세요. ReactMemo 사이트입니다.';

    return (
      <>
        <h1>{title}</h1>
        <h3>{message}</h3>

        <p>이 사이트는 React {version} 학습을 위한 데모 사이트입니다.</p>
        <p>학습을 완료한 후에 현재 사이트가 만들어집니다.</p>

        <div className='row'>
          <div className='col-md-6'>
            <div className='thumbnail'>
              <img
                className='img-fluid'
                src='http://placeimg.com/640/480/any'
                alt='any-648x480'
                />
              <i>Photo by http://placeimg.com</i>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='thumbnail'>
              <img
                className='img-fluid'
                src='https://picsum.photos/640/480'
                alt='any-648x480'
              />
              <i>Photo by https://picsum.photos/</i>
            </div>
          </div>
        </div>
      </>
    );
  }
};
