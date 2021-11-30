import {Component} from 'react'
import SearchComp from './SearchComp'
import UserDitelsComp from './UserDitelsComp'


class ChildPostComp extends Component
{
  constructor(props)
  {
    super();
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
    <label style={{color:"blue"}}>Title	: 	</label><label>{this.props.dataToDo.title}.</label><br></br>
    <label  style={{color:"blue"}} >Budy:	</label>  <label>{this.props.dataToDo.body}</label>
 
   
   
 
    
  </div>
  
       
    )
  }
}



export default ChildPostComp;