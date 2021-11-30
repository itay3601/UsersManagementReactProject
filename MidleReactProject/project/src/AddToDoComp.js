import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import SearchComp from './SearchComp'
import UserDitelsComp from './UserDitelsComp'


class AddPostComp extends Component
{
  constructor(props)
  {
    super();
    this.state={Title:"",userId:props.dataId}
  }
  getTitle=(e)=>{
    this.setState({Title:e.target.value})



  }
  censelButton=()=>{
    return( this.props.callBack())
  }
  AddButton=()=>{
    let obj={};
    obj.id="";
    obj.userId=this.state.userId;
    obj.title=this.state.Title;
    obj.completed=false;
    
    return(this.props.callBackAdd(obj))

  }

  render()
  {
    return(
      

   <div style={{border:"1px solid green",margin:"10px",padding:"10px", width:"400px"   }}>

  <label>Title :  </label><input type="text" onChange={this.getTitle}></input><br></br><br></br>
  <input style={{marginLeft:"270px"}} type="button" value="Censel" onClick={this.censelButton}></input> <input type="button" value="Add" onClick={this.AddButton}></input>
 
 
   
   
  
    
  </div>
  
       
    )
  }
}



export default AddPostComp;
