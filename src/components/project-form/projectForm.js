import React, {Component} from 'react'
import {Form, Input, Button} from 'reactstrap'
import  SelectProject from './../project-form/selectProject'
import {createNewProject} from '../../graph'
import {graphql} from 'react-apollo'
import {Redirect} from 'react-router-dom'

class ProjectForm extends Component{
  state = {
    projectName: '',
    redirect: false

  }

  createProject = (evt) => {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        projectName: this.state.projectName,
      }
    }).then(({data}) => {
      console.log(data.createProject.id)
      localStorage.setItem('project-id', data.createProject.id)
      this.setState({
        redirect: true
      })

    })
  }

  render(){

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/features'/>;
    }

    return(
      <div>
        <SelectProject/>
      <Form>
        <Input type='text' placeholder="Name The Project" required onChange={(evt) => {
          this.setState({
            projectName: evt.target.value
          })
        }}/>

        <Button className="button-start" onClick={this.createProject} >Save It</Button>
      </Form>
      </div>
    )
  }
}
export default graphql(createNewProject)(ProjectForm)
