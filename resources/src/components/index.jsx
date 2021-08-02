import React from 'react';
import ReactDOM  from 'react-dom';

const Index = () => {
  return (
    <h1>Hello World</h1>
  )
};

export default Index;

ReactDOM.render(
  <Index />,
  document.getElementById('app')
)
