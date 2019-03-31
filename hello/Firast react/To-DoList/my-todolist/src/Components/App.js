import React from 'react';
import './Css/App.css';
import Drawer from "./Drawer"


export let App = (props) => {

    return (
        <div className="App">

            {/*\\main*/}
            <Drawer tasks={props.tasks}/>
        </div>
    );

};


export default App;
