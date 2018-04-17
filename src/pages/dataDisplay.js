import React, {Component} from 'react';
import D3Component from './../components/d3Component'
import  { graphql  } from 'react-apollo'
import {querySessions} from './../graph'


class DataDisplay extends Component{
  constructor (){
    super()
    this.state = {
      displayMoods: []
    }
  }

  render(){
    console.log(localStorage.getItem("data"))
    if(!this.props.data.Session){
      return(
        <div>
          loading
        </div>
      )
    }
    let CurrentSessionUserFeelings  = this.props.data.Session.sessionUserFeelings
    let moods = Array.from(CurrentSessionUserFeelings.map((id) => {
      return id.moods
    }))
    console.log(CurrentSessionUserFeelings)
    return(
      <div>
        <D3Component data={moods} size={[900,500]} />
      </div>
    )

  }

}


export default graphql(querySessions, {
  options: { variables: { id: localStorage.getItem("data") } },
})(DataDisplay)