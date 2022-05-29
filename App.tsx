import * as React from 'react';
import './style.css';

export default function App(props) {
  const shoot = () => {
    alert('Great Shot!');
  };

  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>Start click on the button to see the magic :)</p>
      <button onClick={shoot}>Take the Shot!</button>
    </div>
  );
}
