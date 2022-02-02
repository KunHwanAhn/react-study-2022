import { Component } from 'react';

export default class ReactGuideContactDetail extends Component {
  render() {
    const phoneNumber = '114';
    const address = '세종시';

    return (
      <ul>
        <li>전화번호: {phoneNumber}</li>
        <li>주소: {address}</li>
      </ul>
    );
  }
};
