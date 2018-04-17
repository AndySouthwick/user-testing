import React, {Component} from 'react'
import {Form, Input, Button} from 'reactstrap'
import { graphql } from 'react-apollo';
import {createNewSession} from './../graph.js'

class JourneyMapForm extends Component{
  constructor(){
    super()
    this.state = {
      start: false,
      sessionName: '',
      sessionStartTime: 0,
    }
  }
  createSession = (evt) => {
    if (this.state.sessionName === ''){
      evt.preventDefault()
    }else{
      this.props.mutate({
        variables: {
          sessionName: this.state.sessionName,
          startTime: this.state.sessionStartTime
        }
      }).then(({data}) => {
        console.log(data.createSession.id)
        localStorage.setItem('data', data.createSession.id)
      }).then(this.props.changeComponent)
    }
  }
  render(){
    return(
      <Form>
      <Input type='text' placeholder="Name The Session" required onChange={(evt) => {
        this.setState({
          sessionName: evt.target.value
        })
      }}/>
      <Button className="button-start" onClick={this.createSession} >{this.props.startStopBtn}</Button>
    </Form>
    )
  }
}
export default graphql(createNewSession)(JourneyMapForm)
