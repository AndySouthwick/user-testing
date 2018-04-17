import React, {Component} from 'react'
import FeatureForm from './featureForm'
import {graphql} from 'react-apollo'
import {queryFeaturesOnProject} from '../../graph'
import {Link} from 'react-router-dom'

class Features extends Component {

  componentDidMount(){

  }

  render(){

    console.log(this.props.data.Project)
    if(!this.props.data.Project){
      return <div>Loading Features</div>
    }
      let projectFeatures = this.props.data.Project.features
      console.log(projectFeatures)
      let theFeatures = projectFeatures.map((id) => {
      return <div>{id.featureName}</div>
      })


    // this.props.data.Project.features.map((id) => {
    //   console.log(id)
    // })
    return(
      <div className='section-feature'>
        <div className='feature-column'>
          <h3>Add New Features To A Project</h3>
          <FeatureForm/>
          {theFeatures}
          <Link to="/home">next</Link>
        </div>

      </div>
    )
  }
}
export default graphql(queryFeaturesOnProject,
  { options: { variables: { projectId: localStorage.getItem("project-id") } },
  })(Features)