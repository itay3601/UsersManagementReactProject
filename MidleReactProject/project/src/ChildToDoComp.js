import {Component} from 'react'
import SearchComp from './SearchComp'
import UserDitelsComp from './UserDitelsComp'


class ChildToDoComp extends Component
{
  constructor(props)
  {
    super();
  }
  MarkCompletedButton=()=>{
      return(this.props.callBackMarkCompleted(this.props.dataToDo.id))
  }


  render()
  {
      let bol;
      if(this.props.dataToDo.completed==true){
        bol="true"
      }else{
        bol="false"
      }
    return(
        
   <div  style={{border:"1px solid red",margin:"10px",padding:"10px"}} >
    <label  style={{color:"blue"}}>Title	:</label><label>{this.props.dataToDo.title}.</label><br></br>
    <label  style={{color:"blue"}} >Completed	:</label><label> {bol}</label>  {this.props.dataToDo.completed==false && <div><input type="button" value="Mark Completed" onClick={this.MarkCompletedButton}></input></div>}
 
   
   
 
    
  </div>
  
       
    )
  }
}



export default ChildToDoComp;