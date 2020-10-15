import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'


const DATA = [
  { id: "todo-0", name: "wake up", completed: true },
  { id: "todo-1", name: "walk dogs", completed: false },
  { id: "todo-2", name: "go to work", completed: false }
];

ReactDOM.render(
<Router>
<App tasks={DATA} />
</Router>,
document.getElementById("root"));

