import React, {Component} from 'react'
import {Button} from 'reactstrap'
import { graphql } from 'react-apollo'
import {createNewMood} from './../../graph'
import emoji from 'emoji-dictionary'

class Moods extends Component{
  constructor () {
    super()
    this.state = {
      mood: ''
    }
  }

  render(){

    if(this.state.mood !== ''){
     this.props.mutate({
       variables: {
         id: localStorage.getItem("data"),
         moodTime: this.props.moodTime,
         mood: this.state.mood
       }
     }).then(() => {
       this.setState({
         mood: ''
       })
     })


    }


    if(this.state.mood){
     //fetchIt()
      const fetchit = fetch('http://localhost:8080', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({timestamp: this.props.moodTimeStamp,
                              mood: this.state.mood,
                              sessionId: localStorage.getItem("data")})
      }).then(res => console.log(res));
      let loading = ''
      if(!fetchit.response){
         loading = <div>Saving screenCapture to disk</div>
        return loading
      }
      console.log(this.state.mood)
    }
    return(
      <div className="section-moods">
        {this.loading}
        <span>{this.props.time}</span>
        <Button  onClick={() => {
          this.setState({
            mood: 5,
          })
        }}>{emoji.getUnicode(":+1:")}</Button>
        <Button  onClick={() => {
          this.setState({
            mood: 4
          })
        }}>{emoji.getUnicode(":sunglasses:")}</Button>
        <Button  onClick={() => {
          this.setState({
            mood: 3
          })
        }}>{emoji.getUnicode(":unamused:")}</Button>
        <Button  onClick={() => {
          this.setState({
            mood: 2
          })
        }}>{emoji.getUnicode(":worried:")}</Button>
        <Button onClick={() => {
          this.setState({
            mood: 1
          })
        }}>{emoji.getUnicode(":-1:")}</Button>
      </div>
    )
  }
}
export default graphql(createNewMood)(Moods)