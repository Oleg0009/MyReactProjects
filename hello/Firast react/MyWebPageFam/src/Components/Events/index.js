

import React, {Component} from 'react';
import Calendar from './Calendar/CalendarCreater'
import './Events.css'

import Typist from 'react-typist';


class InfoCreater extends Component {

    constructor() {
        super();
this.state={
text:""
}
    }


changeText(txt){
        this.setState({text:txt});
    console.log(txt);
}



    render() {
        return(
            <div className="EventMainDiv">
                <div className="cal"><Calendar change={this.changeText.bind(this)}/></div>
                <div className="txt">

                    <Typist>{this.state.text}</Typist>
                </div>
            </div>

        )
    }


}

export default InfoCreater;