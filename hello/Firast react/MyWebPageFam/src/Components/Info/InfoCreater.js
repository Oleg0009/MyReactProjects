// import React, {Component} from 'react';
import Image1 from './Images/Dad.JPG'
import Image2 from './Images/Mom.JPG'
import Image3 from './Images/OlegFoto.jpg'
import Image4 from './Images/IgorYulia.jpg'
import Image5 from './Images/Igor.JPG'
import Image6 from './Images/Michael.JPG'


import React, {Component} from 'react';

// import './css/Calculator.css';
import ImageCreater from './ImageCreater'
import TextCreater from './TextCreater'

class InfoCreater extends Component {

    constructor() {
        super();


        this.state = {
            images: [Image1, Image2, Image3, Image4, Image5,Image6],
            text: [
                "Dad", "Mom","Oleg", "Julia","Igor","Michael"
            ]
        };

    }


    render() {
        {


                return (
                    <div className="InfoCreater">
                        <div className="Info">
                            <ImageCreater image={this.state.images[0]}/>
                            <TextCreater text={this.state.text[0]}/>
                        </div>
                        <div className="Info">
                            <TextCreater text={this.state.text[1]}/>
                            <ImageCreater image={this.state.images[1]}/>
                        </div>
                        <div className="Info">
                            <ImageCreater image={this.state.images[2]}/>
                            <TextCreater text={this.state.text[2]}/>
                        </div>
                        <div className="Info">
                            <TextCreater  text={this.state.text[3]}/>
                            <ImageCreater image={this.state.images[3]}/>
                        </div>
                        <div className="Info">
                            <ImageCreater image={this.state.images[4]}/>
                            <TextCreater text={this.state.text[4]}/>
                        </div>
                        <div className="Info">

                            <TextCreater text={this.state.text[5]}/>
                            <ImageCreater image={this.state.images[5]}/>
                        </div>
                    </div>

                )


        }

    }
}

export default InfoCreater;
// class InfoCreater extends React{
//     constructor(props){
//         super(props);
//
//         // this.state={
//         //     images:[Image1,Image2,Image3,Image4,Image5],
//         //     text:[
//         //         "Dad", "Mom", "Oleg", "Igor", "Julia",
//         //     ]
//         // }
//
//     }
//
//     render(){
//         return(
//             <div>
//                 {"Hello"}
//                 {/*{*/}
//                     {/*this.state.images.map((image,index)=>{*/}
//                         {/*<Info image={image} text={this.state.text[index]}/>*/}
//                     {/*})*/}
//                 {/*}*/}
//
//
//             </div>
//
//
//
//         )
//
//
//
//     }
//
//
//
//
// }
// export default InfoCreater;
