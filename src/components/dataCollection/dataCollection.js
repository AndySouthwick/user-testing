import React, {Component} from 'react'
import {Button } from 'reactstrap'
import Timer from './timer'
import Moods from './moods'
import './dataCollection.css'
import { graphql } from 'react-apollo';
import {updateSessionTime} from './../../graph'
import { Redirect }  from 'react-router-dom'
import { Query } from 'react-apollo'


class DataCollection extends Component{
  constructor (){
    super()
    this.state = {
      totalSecondCount: 0,
      seconds: 0,
      minutes: 0,
      stopTheClock: false,
      redirect: false
    }
  }


  async componentWillMount() {
    let iTotalSecondCount = 1
    let iSecond = 1
    let iMinute = 0
    const timerFunction = () => {
      iTotalSecondCount++
      iSecond++
      this.setState({
        totalSecondCount: iTotalSecondCount
      })

      if (iSecond === 60) {
        iMinute++
        iSecond = 0
        this.setState({

          seconds: iSecond,
          minutes: iMinute
        })
      }
      this.setState({
        seconds: iSecond
      })
      // console.log(this.state.minutes, iTotalSecondCount % 60)
    }

    const intervalTimer = setInterval(() => {
      timerFunction()
    }, 1000)
    this.stopClock = () => {

       clearInterval(intervalTimer)
      this.props.mutate({
          variables: {
            id: localStorage.getItem("data"),
            stopTime: this.state.totalSecondCount
          }
      }).then(() => {
        console.log('stop from then')
          this.setState({
           redirect: true
          })
        console.log(this.state.redirect)
      }
      )
    }
  }
  render(){
    const  redirect  = this.state.redirect;
    if(redirect){
     return <Redirect to='/displayData'/>
    }
    return(

      <div>
        <Timer seconds={this.state.seconds} minutes={this.state.minutes}/>
        <Moods moodTime={this.state.totalSecondCount} moodTimeStamp={this.state.totalSecondCount}/>
        <Button className="button-start" onClick={this.stopClock}>{this.props.startStopBtn}</Button>
      </div>

    )
  }
}


 export default graphql(updateSessionTime)(DataCollection)