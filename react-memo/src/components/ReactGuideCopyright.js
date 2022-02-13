import { Component } from 'react';


export default class ReactGuideCopyright extends Component {
  render() {
    const date = new Date();

    return (
      <>
        <hr />
        <p className='text-center'>
          Copyright &copy; {date.getFullYear()} <em>ReactMemo</em> all right reserved.
        </p>
      </>
    );
  }
};
