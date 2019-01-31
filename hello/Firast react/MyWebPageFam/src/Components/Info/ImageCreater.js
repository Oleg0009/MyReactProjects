import React, {Component} from 'react';
import "./ImageCreater.css"
class ImageCreater extends Component {

    constructor(props) {
        super(props);





    }


    render() {

        return (
            <div className="DivIM">
                <img className="images" src={this.props.image} alt="Image"/>
            </div>

        );

    }
}

export default ImageCreater;
