import React, {Component} from 'react';
import './css/Slider.css';
import image1 from './images/Family.JPG';
import image3 from './images/Family3.jpg';


class Slider extends Component {

    constructor(props) {
        super(props);


        this.state = {
            images: [image1, image3],
            imageCurrentIndex: 0,
            isCycleMode: false,
            canGoPrev: false,
            canGoNext: true,

        };
        this.nextSlideHandler = this.nextSlideHandler.bind(this);

    }

    nextSlideHandler(e) {
        let NewIndex = this.state.imageCurrentIndex;
        debugger;
        if (e.target.dataset.direction === "next") {

            if (NewIndex < this.state.images.length - 1) {
                NewIndex++;

                this.setState({canGoPrev: true});
            }
            if (NewIndex === this.state.images.length - 1) {
                this.setState({canGoNext: false});
            }

        } else {
            if (NewIndex > 0) {
                NewIndex--;
                this.setState({canGoNext: true});
            }
            if (NewIndex === 0) {
                this.setState({canGoPrev: false});
            }

        }
        this.setState({imageCurrentIndex: NewIndex});
    }


    render() {
        return (
            <div className="mainPanel">
                {/*<div className="Wrapper  active-page1">*/}
                    {/*<div className="page page1">*/}
                        {/*<h2>First page</h2>*/}
                    {/*</div>*/}
                    {/*<div className="page page2">*/}
                        {/*<h2>Second page</h2>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="NavPanel">*/}
                    {/*<div className="scroll-btn up"></div>*/}
                    {/*<div className="scroll-btn down"></div>*/}
                    {/*<nav>*/}
                        {/*<ul>*/}

                            {/*<li data-target="1" className="nav-btn nav-page1 active">hello l1</li>*/}
                            {/*<li data-target="2" className="nav-btn nav-page2">hello l2</li>*/}
                        {/*</ul>*/}
                    {/*</nav>*/}

                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={image1} alt="Image"/>
                        </div>
                        <div className="flip-box-back">
                            <img src={image3} alt="Image"/>
                        </div>
                    </div>
                </div>
                    {/*<div className="button">*/}
                    {/*<img src={imagePrev} data-direction="Prev" disabled={!this.state.canGoPrev}*/}
                    {/*onClick={this.nextSlideHandler}/>*/}
                    {/*</div>*/}
                    {/*<div className="Images">*/}
                    {/*<img src={this.state.images[this.state.imageCurrentIndex]} alt=""/>*/}


                    {/*</div>*/}
                    {/*<div className="button">*/}
                    {/*<img src={imageNext} data-direction="next" disabled={!this.state.canGoNext}*/}
                    {/*onClick={this.nextSlideHandler}/>*/}
                    {/*</div>*/}
                </div>

        );
    }
}

export default Slider;
