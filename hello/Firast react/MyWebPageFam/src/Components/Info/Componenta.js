import React, {Component} from 'react';

import Typist from 'react-typist';


class TypeText extends Component{

    constructor(props){
        super(props);
    }


    render()
    {
        return (
            <Typist>
                {this.props.text}
            </Typist>
        );
    }




}


export default TypeText;
