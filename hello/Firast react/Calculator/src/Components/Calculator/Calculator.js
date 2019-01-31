import React, {Component} from 'react';
import './css/Calculator.css';

class Calculator extends Component {

    constructor() {
        super();


        this.state = {
            result: 0
            , number1: 10
            , number2: 15,
            operation:"+"
        };
        this.showResult = this.showResult.bind(this);
        this.handleChangeNumber1 = this.handleChangeNumber1.bind(this);
        this.handleChangeNumber2 = this.handleChangeNumber2.bind(this);
        this.handleOperationChange = this.handleOperationChange.bind(this);
    }

    showResult() {
        let result=0;
        switch (this.state.operation) {

            case '+':{
                result= this.state.number1 + this.state.number2;
                break;
            }
            case '-':{
                result=this.state.number1 - this.state.number2;
                break;
            }
            default:break;
        }
        this.setState({result: result});

    }

    handleChangeNumber1(e) {
        this.setState({number1:+e.target.value});
        let {number2,operation}=this.state;
        this.showResult(operation,+e.target.value,number2);
    }

    handleChangeNumber2(e) {
        this.setState({number2:+e.target.value});

        let {number1,operation}=this.state;
        this.showResult(operation,number1,+e.target.value);
    }
    handleOperationChange(e) {
        this.setState({operation:e.target.value});

        let {number1,number2}=this.state;

        this.showResult(e.target.value,number1,number2);

    }

    render() {
        return (
            <div className="Calculator">
                <div>
                    <input value={this.state.number1} onChange={this.handleChangeNumber1}/>
                </div>
                <div>
                    <select name="" id=""  onChange={this.handleOperationChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                </div>
                <div>
                    <input value={this.state.number2} onChange={this.handleChangeNumber2}/>
                </div>
                <div>
                    <div>
                        Result:<span>{this.state.result}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
