import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';





ReactDOM.render(
    <Router>
    <App />
    </Router>,document.getElementById("root"));
    