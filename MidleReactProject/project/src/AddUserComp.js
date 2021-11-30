import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import SearchComp from './SearchComp'
import UserDitelsComp from './UserDitelsComp'
import UserUtils from './Utils/UserUtils'


class AddPostComp extends Component
{
  constructor()
  {
    super();
    this.state={Name:"",Email:""}
  }
  censelButton=()=>{
    return( this.props.callBackCancel())
  }
  UserNameInput=(e)=>{
    this.setState({Name:e.target.value})

  }
  UserEmailInput=(e)=>{
    this.setState({Email:e.target.value})
  }
  AddUserButton= async()=>{
    let obj={}
    obj.name=this.state.Name;
    obj.email=this.state.Email;
    obj.id=""
    obj.address={}
    obj.address.street="";
    obj.address.city="";
    obj.address.zipcode="";

   
    return( this.props.callBackAdd(obj))
   
 


  }

  render()
  {
    return(
      

   <div style={{border:"1px solid green",margin:"10px",padding:"10px",height:"250px", width:"400px"  }}>
   <h2>Add New User</h2>
   <label>Name  : </label><input type="text" onChange={this.UserNameInput}></input> <br></br>
   <label>Email  : </label><input type="text"  onChange={this.UserEmailInput}></input><br></br><br></br>
  <input style={{marginLeft:"270px"}} type="button" value="Censel" onClick={this.censelButton}></input> <input type="button" value="Add" onClick={this.AddUserButton}></input>
 
 
   
   
  
    
  </div>
  
       
    )
  }
}



export default AddPostComp;
