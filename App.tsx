import * as React from 'react';
import './style.css';

export default function App(props) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
