import React from 'react'

export default class HelloWorld extends React.Component{
    state = {
        who: "World"
    }

    changeWho(newValue){
        this.setState({
            who:newValue
        })
    }

    render(){
        return <div>
            <p>Hello {this.state.who}</p>
            <button onClick = {e => this.changeWho("World")}>World</button>
            <button onClick = {e => this.changeWho("Friend")}>Friend</button>
            <button onClick = {e => this.changeWho("React")}>React</button>
        </div>
    }
}