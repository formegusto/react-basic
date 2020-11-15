import React, { useEffect } from 'react';

function AlienComponent({number, onChange}) {
    useEffect(() => {
        console.log("Alien Component 렌더링 됩니다!");
    },[number]);

    return (
        <div>
            <h1>나는 알린 컴포넌트!!</h1>
            <button onClick={onChange}>{number}</button>
        </div>
    )
}

export default AlienComponent;