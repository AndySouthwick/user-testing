import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import {createFeature} from './../../graph'
import {Form, Input, Button} from 'reactstrap'
class FeatureForm extends Component {
  state = {
    feature: ''
  }
  submitFeature = () => {

    this.props.mutate({
      variables: ({
        projectId: localStorage.getItem('project-id'),
        featureName: this.state.feature
      })
    }).then((res) => {
      console.log(res.data)
    })
  }
  render(){
    console.log(this.state.feature)
    return(
      <Form className='feature-form'>
        <Input type='text' onChange={(evt) => {
          this.setState({
            feature: evt.target.value
          })
        }} placeholder="Add A Feature"/>
        <Button type="submit" onClick={this.submitFeature}>Submit</Button>
      </Form>
    )
  }
}
export default graphql(createFeature)(FeatureForm)