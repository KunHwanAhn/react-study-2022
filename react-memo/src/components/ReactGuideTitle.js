import './ReactGuideTitle.css';

function ReactGuideTitle() {
  const subject = '리액트';
  const title = `${subject} 교과서 학습 가이드`;

  const titleStyles = {
    color: '#C0FFEE',
    textDecoration: 'underline',
  };

  return (
    <header className='react-guide-title'>
      <h2 style={titleStyles}>{ title }</h2>
    </header>
  );
};

export default ReactGuideTitle;
