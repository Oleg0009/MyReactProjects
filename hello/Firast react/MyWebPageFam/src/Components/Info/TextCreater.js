import React, {Component} from 'react';
import './Text.css'

class TypeText extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (<div className="divText">
                {
                    this.props.text
                }
            </div>
        );
    }


}


export default TypeText;