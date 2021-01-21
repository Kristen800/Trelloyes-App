
import React from 'react'


export default class Bomb extends React.Component {

    state ={
        count:0
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                count: this.state.count +1
            })
        },1000)
    }

    render() {
        let text 
        if (this.state.count >= 8){
            text =<p>BOOM!!!!</p>
        }else if(this.state.count %2 == 0){
            text = <p>tick</p>
        }else{
            text = <p>tock</p>
        }
        return <div>
            {this.state.count}
            {text}
            
        </div>
    }

}