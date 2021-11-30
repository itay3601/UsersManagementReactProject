import {Component} from 'react'
import SearchComp from './SearchComp'
import UserDitelsComp from './UserDitelsComp'
import ChildToDoComp from './ChildToDoComp'
import Todos from './Utils/ToDoUtils'
import PostUtils from './Utils/PostUtils'
import ChildPostComp from './ChildPostComp'
import AddPostComp from './AddPostComp'



class PostComp extends Component
{
  constructor(props)
  {
    super();
    this.state={ToDos:"",UserPost:[{}],AddButtonClick:false}
    // this.setState({ToDos:this.props.Data})
    
  }
  async componentDidMount()
  {
  
     let resp = await PostUtils.getUsersPost(this.props.Data);
     console.log(resp)
     this.setState({UserPost : resp});
  }
  async componentDidUpdate(currentProps)
  {
   

    //For preventing infinite loop
    if(currentProps.Data != this.props.Data)
    {
        let resp = await PostUtils.getUsersPost(this.props.Data);
        console.log(resp)
        this.setState({UserPost : resp});
      
    }

  }

     
    
  AddPostButton=()=>{
    this.setState({AddButtonClick:true})


}
censelButton=()=>{
  this.setState({AddButtonClick:false})

}
AddButton=(newPost)=>{
   let correntPost=this.state.UserPost;
    newPost.id=correntPost.length+1;
    correntPost.push(newPost)
    this.setState({UserPost : correntPost});
    this.setState({AddButtonClick:false})

}
   
     
     
  

 
 
  render()
  {
   
       let Post=this.state.UserPost.map((item,index)=>{
           return <ChildPostComp     key={index} dataToDo={item}/>
      })
    return(

   <div   style={{border:"1px solid green",margin:"10px",padding:"10px"}}>
     <label  style={{ paddingRight:"100px"}} >Post  User  {this.props.Data} </label> <input type="button" value="ADD" onClick={this.AddPostButton}></input>

     {!this.state.AddButtonClick && <div  style={{margin:"10px",padding:"10px"}}> {Post}</div>} 
   
     {this.state.AddButtonClick&&<div><AddPostComp callBack={this.censelButton}    callBackAdd={this.AddButton}  dataId={this.props.Data}/></div>}

    
  </div>


  
       
    )
  }
}



export default PostComp;