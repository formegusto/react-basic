import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    static defaultProps = {
        defaultNumber: 10,
    }

    static propTypes = {
        name: PropTypes.number
    }
    
    state = {
        incNumber: 0,
        decNumber: 0,
    }

    render() {
        const { number, changeNumber, defaultNumber } = this.props;
        const { incNumber, decNumber } = this.state;
        return (
            <div>
                <h1>알린이의 새롭고 멋있는 클래스형 컴포넌트</h1>
                <hr/>
                <h1>부모가 넘겨준 넘버 : &nbsp;
                    <button onClick={() => changeNumber()}>{number}</button>
                </h1>
                <h1>
                    안 넘겨줘도 되는 넘버 : {defaultNumber}
                </h1>
                <div>
                    늘어나는 알린넘버 : &nbsp;
                    <button onClick={() => 
                        this.setState((prevState, props) => {
                            console.log("========기존 상태========");
                            console.log(prevState);
                            console.log("========보유 Props========");
                            console.log(props);
                            return { incNumber: incNumber + 1 };
                        }, () => {
                            console.log("========현재 상태========");
                            console.log(this.state);
                        })}>
                            {incNumber}
                    </button>
                </div>
                <div>
                    줄어드는 알린넘버 : &nbsp;
                    <button onClick={() => 
                        this.setState((prevState, props) => {
                            console.log("========기존 상태========");
                            console.log(prevState);
                            console.log("========보유 Props========");
                            console.log(props);
                            return { decNumber: decNumber - 1 };
                        }, () => {
                            console.log("========현재 상태========");
                            console.log(this.state);
                        })}>
                            {decNumber}
                    </button>
                </div>
            </div>
        )
    }
}

export default MyComponent;