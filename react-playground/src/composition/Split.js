import React from 'react'
//import Split.css
import './Split.css';

//a function for the component.
function Split(props) {
    const combinedClassName =`split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div 
        className={combinedClassName}
        style={newStyles}
        >
           {props.children}
        </div>
    );
}

//default export statement
export default Split;