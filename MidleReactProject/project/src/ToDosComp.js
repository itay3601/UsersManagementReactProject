import {Component} from 'react'
import SearchComp from './SearchComp'
import UserDitelsComp from './UserDitelsComp'
import ChildToDoComp from './ChildToDoComp'
import Todos from './Utils/ToDoUtils'
import AddToDoComp from './AddToDoComp'
import ToDoUtils from './Utils/ToDoUtils'


class ToDosComp extends Component
{
  constructor(props)
  {
    super();
    this.state={ToDos:"",UserTodos:[{}]}
    // this.setState({ToDos:this.props.Data})
    
  }
  async componentDidMount()
  {
  
     let resp = await Todos.getUsersToDo(this.props.Data);
     console.log(resp)
     this.setState({UserTodos : resp,AddButtonClick:false});
  }
  
  
     
  async componentDidUpdate(currentProps)
  {
   

    //For preventing infinite loop
    if(currentProps.Data != this.props.Data)
    {
        let resp = await Todos.getUsersToDo(this.props.Data);
        console.log(resp)
        this.setState({UserTodos : resp});
      
    }

  }
  AddPostButton=()=>{
      this.setState({AddButtonClick:true})


  }
  censelButton=()=>{
    this.setState({AddButtonClick:false})

  }
  AddButton=(newToDo)=>{
      let corentToDo=this.state.UserTodos;
      newToDo.id=corentToDo.length+1;
      corentToDo.push(newToDo);
      this.setState({UserTodos : corentToDo});
      this.setState({AddButtonClick:false})

  }
  MarkCompletedButton=async (id)=>{
    let corentToDo=this.state.UserTodos;
    let updateToDo= await Todos.UbdateMarkCompleted(id,corentToDo);
    this.setState({UserTodos : updateToDo});
    let alltodo= await Todos.getAllToDo()
    let bol =await Todos.CheacktUsersToDoCoplete(this.props.Data,this.state.UserTodos);
    if(bol){
        return(this.props.callBack(this.props.Data))
    }


  }
     
     
     
  

 
 
  render()
  {
   
       let todos=this.state.UserTodos.map((item,index)=>{
           return <ChildToDoComp     key={index} dataToDo={item}  callBackMarkCompleted={this.MarkCompletedButton}/>
      })
    return(
        <div style={{border:"1px solid green",margin:"10px",padding:"10px"}}>

              <label  style={{ paddingRight:"100px"}} >Todos User  {this.props.Data}  </label>
               <input type="button" value="ADD" onClick={this.AddPostButton}></input>
{/* /////////////////////////////////////////////////////////////////////////////////////////// */}
{!this.state.AddButtonClick && <div  style={{margin:"10px",padding:"10px"}}>{todos}</div>} 



          {this.state.AddButtonClick&&<div><AddToDoComp callBack={this.censelButton}  callBackAdd={this.AddButton}  dataId={this.props.Data}  /></div>}
           



        </div>
        
      

  
  
       
    )
  }
}



export default ToDosComp;