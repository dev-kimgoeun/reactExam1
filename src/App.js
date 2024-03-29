// import './App.css';
import React from 'react';
import MyHeader from './MyHeader'
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {

  const counterProps = {
    a:1,
    b:2,
    c:3,
  };

  return (
    <Container>

    <div >
      <MyHeader />
      <Counter {...counterProps} /> 

      <MyFooter />
    </div>
    </Container>
  );
}

export default App;
