import React, {Component} from 'react'
import {updateProject} from './../../graph'
import {graphql} from 'react-apollo'


class SelectProject extends Component{

  render(){
if(!this.props.data){
  return <div>You have no projects. Go ahead and add one.</div>
}else {
  let selectOptions = this.props.data
  console.log(selectOptions)
}
    return(
      <select>
        <option value="">test</option>
      </select>
    )
  }
}

export default graphql(updateProject)(SelectProject)
