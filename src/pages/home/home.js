import React, {Component} from 'react'
import {Container, Row, Col }from 'reactstrap'
import './home.css'
import JourneyMapForm from './../../components/journeyMapForm'
import DataCollection from './../../components/dataCollection/dataCollection'


class Home extends Component{
constructor (){
  super()
  this.state = {
    startStop: 'Start'
  }
}

switchView = () => {
  if(this.state.startStop === 'Start'){
    return this.setState({
      startStop: 'Stop'
    })
  }
  if(this.state.startStop === 'Stop') {
   return this.setState({
      startStop: 'Start'
    })
  }
}
  render(){
    let  middleInfo = ''
      if(this.state.startStop === 'Start'){
        middleInfo = <JourneyMapForm startStopBtn={this.state.startStop} changeComponent={this.switchView}/>
      }
      if(this.state.startStop === 'Stop' ){
        middleInfo = <DataCollection startStopBtn={this.state.startStop} changeComponent={this.switchView}/>
      }
      console.log(this.state)
    return(
      <div className='home-component'>
        <Container>
          <Row>
            <Col>
              <div className="section-start">
                <h2>Journey Map Data Collection</h2>
                {middleInfo}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}




export default Home