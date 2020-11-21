import React from 'react';
import FormeComponent from './FormeComponent';

function AlienComponent (props) {
    return (
        <div>
            저는 {props.color} 가 좋아!
            <FormeComponent />
        </div>
    );
}

export default AlienComponent;