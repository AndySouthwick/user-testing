import React, {Component} from 'react'

class Timer extends Component{
  render(){
    return(
      <div>
        <span>{this.props.minutes}:{this.props.seconds}</span>
      </div>
    )
  }
}
export default Timer