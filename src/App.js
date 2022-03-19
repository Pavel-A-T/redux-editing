import React, {useState} from "react";
import './css/App.sass';
import List from './components/List';
import Form from './components/Form';

function App() {
  return (
    <div className="wrapper">
      <Form />
      <List />
    </div>
  );
}

export default App;
