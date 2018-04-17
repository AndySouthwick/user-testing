import React, {Component} from 'react'
import ProjectForm from './../../components/project-form/projectForm'
import './project.css'
class Project extends Component{
  render(){
    return(
      <div className="section-project">
        <div className="project">
          <h4>CHOOSE A PROJECT OR MAKE A
            NEW ONE</h4>
        <ProjectForm/>
        </div>
      </div>
    )
  }
}
export default Project