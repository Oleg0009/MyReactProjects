import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Slider from './Components/Slider/Slider'
import InfoCreater from "./Components/Info/InfoCreater"
import Header from "./Components/Header/Header"
 import Calendar from './Components/Events/index'
ReactDOM.render(
    <div>
        <Header/>
        <Slider/>
        <InfoCreater/>
        <Calendar/>
    </div>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
