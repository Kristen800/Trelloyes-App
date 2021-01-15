import React from 'react';
function HelloWorld(props){
    console.log(props)
    return <div>
        Hello{props.myname}
        <h1>{props.age}</h1>
    </div>
}


export default HelloWorld