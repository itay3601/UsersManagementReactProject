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
    this.state={POST:"",Budy:"",userid:props.dataId}
  }
  postChenge=(e)=>{
   this.setState({POST:e.target.value})


  }
  BudytChenge=(e)=>{
    this.setState({Budy:e.target.value})
 
 
   }
  censelButton=()=>{
    return( this.props.callBack())
  }
  addButton=()=>{
    let obj={}
    obj.id=""
    obj.userId=this.state.userid;
    obj.title=this.state.POST;
    obj.body=this.state.Budy;
    return(this.props.callBackAdd(obj))

  }

  render()
  {
    return(
      

   <div style={{border:"1px solid green",margin:"10px",padding:"10px",height:"100px", width:"400px"  }}>
    <label>New	Post – User</label><br></br>
  <label>Post :  </label><input type="text" onChange={this.postChenge}></input><br></br>
  <label>Budy :  </label><input type="text" onChange={this.BudytChenge}></input><b></b>
  <input style={{marginLeft:"270px"}} type="button" value="Censel" onClick={this.censelButton}></input> <input type="button" value="Add" onClick={this.addButton}></input>
 
 
   
   
  
    
  </div>
  
       
    )
  }
}



export default AddPostComp;
