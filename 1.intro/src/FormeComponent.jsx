import React from 'react';

function FormeComponent({number, onChange}) {

    console.log("Forme Component 렌더링 됩니다!");
    
    return (
        <div>
            <h1>나는 포메 컴포넌트!!</h1>
            <button onClick={onChange}>{number}</button>
        </div>
    )
}

export default FormeComponent;