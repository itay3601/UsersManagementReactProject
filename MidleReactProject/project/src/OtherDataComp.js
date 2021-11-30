







  

import {Component} from 'react'

class OtherDataComp extends Component
{
  constructor(props)
  {
    super();
    this.state={street:props.data.address.street,city:props.data.address.city,zipcode:props.data.address.zipcode}
  }
  streetChange=(e)=>{
    this.setState({street:e.target.value})
    return(this.props.callBackChangeSteet(e.target.value))
  }
  cityChange=(e)=>{
    this.setState({city:e.target.value})
    return(this.props.callBackChangeCity(e.target.value))
  }
  zipChange=(e)=>{
    this.setState({zipcode:e.target.value})
    return(this.props.callBackChangeZip(e.target.value))
  }

 



  render()
  {
    return(
    <div>
    <label>Street :</label><br></br><input type="text" value={this.state.street} onChange={this.streetChange} ></input><br></br>
    <label>City :</label><br></br><input type="text" value={this.state.city} onChange={this.cityChange} ></input><br></br>
    <label>ZIP Code :</label><br></br><input type="text" value={this.state.zipcode}  onChange={this.zipChange} ></input><br></br>
     
       
    </div>)
  }
}



export default OtherDataComp;
