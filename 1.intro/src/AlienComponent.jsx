import React from 'react';

function AlienComponent({number, onChange}) {

    console.log("Alien Component 렌더링 됩니다!");
    
    return (
        <div>
            <h1>나는 알린 컴포넌트!!</h1>
            <button onClick={onChange}>{number}</button>
        </div>
    )
}

export default AlienComponent;