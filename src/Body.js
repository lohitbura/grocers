import react from "react";



class Clock extends react.Component{
    constructor(props){
            super(props);
        this.state =  {
            date : new Date()
        }
    }

componentDidMount(){
    this.timerID = setInterval(
       ()=> this.tick(),1000
    )
}

componentWillUnmount(){
    clearInterval(this.timerID);
}

 tick() {
    this.setState({
    date : new Date()
    });

}

render(){
 return (
    <div>
        <p>Time is {this.state.date.toLocaleTimeString()}</p>
    </div>
    );
}

}


function Body(){
    return (
        <div>
            <h1>Opening soon</h1>
            <Clock></Clock>
        </div>
    );
}

export default Body;