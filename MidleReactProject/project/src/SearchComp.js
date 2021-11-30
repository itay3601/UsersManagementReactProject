import {Component} from 'react'
import UserUnit from './Utils/UserUtils'
import UserDitelsComp from './UserDitelsComp'
import ToDosComp from'./ToDosComp'
import PostComp from './PostComp'
import AddUserComp from'./AddUserComp'
import Todos from './Utils/ToDoUtils'

import './Appcopy.css';



class SearchComp extends Component
{
  constructor()
  {
    super();
    this.state={user:[],todos:[], search:"",userIdOnClickLabal:"",tososcomp:"",lebalclick:false,isAllToDoCopleted:false,AddUserButtonClick:false,length:""}
  }
  async componentDidMount()
  {
    console.log('componentDidMount');
    let resp = await UserUnit.getAllUsers();
    let resp2= await Todos.getAllToDo() 
    
    this.setState({user : resp.data, todos: resp2.data ,length:resp.data.length});
  }
  search=(e)=>{
      this.setState({search:e.target.value})


  }
  AddUserButton=()=>{
    this.setState({lebalclick:false})
    this.setState({AddUserButtonClick:true})

  }
  CenselButtonUser=()=>{
    this.setState({AddUserButtonClick:false})


  }
  AddButtonUser= async(dataUserToAdd)=>{
    let arrUser=this.state.user;
    
    dataUserToAdd.id=this.state.length+1
    arrUser.push(dataUserToAdd);
    this.setState({user : arrUser });
    this.setState({ user : arrUser,   AddUserButtonClick:false,length:this.state.length+1 })

  }
  deleteUserButton= async(dataIdDelete)=>{
    let CorrentArrUsers=this.state.user;
    let arrUserAfterDelete= await UserUnit.DeleteUser(dataIdDelete,CorrentArrUsers);
    this.setState({user : arrUserAfterDelete });
  }
  UpdateUserButton=async (UbdateUser)=>{
    let CorrentArrUsers=this.state.user;
    let arrUserAfterUbdate= await UserUnit.UbdateeUser(UbdateUser,CorrentArrUsers);
    this.setState({user : arrUserAfterUbdate });




  }
  callBackToDo=(id)=>{
   
      this.setState({isAllToDoCopleted:true})
    


  }
    tosos=async(data)=>{

      this.setState({AddUserButtonClick:false})
      if(data==this.state.userIdOnClickLabal){

        this.setState({lebalclick:!this.state.lebalclick})
        
      }else{
        
        this.setState({userIdOnClickLabal:data})
       
        this.setState({lebalclick:true})
        this.setState({isAllToDoCopleted:false})
        
      }

  }
 
  
  

  render()
  {
    
    let Users = this.state.user.map((item,index) =>
    {
        if(item.name.includes(this.state.search)||item.email.includes(this.state.search)){
        if(item.id==this.state.userIdOnClickLabal&&this.state.lebalclick){
           
          if(Todos.CheacktUsersToDoCoplete(item.id,this.state.todos)||this.state.isAllToDoCopleted){
          return<UserDitelsComp  key={index}  allDataUser={item} callBack={this.tosos} lebal={true}  callBackDelete={this.deleteUserButton}   callBackUpdate={this.UpdateUserButton} allcopleted={true} />
    
          }else{
            return<UserDitelsComp  key={index}  allDataUser={item} callBack={this.tosos} lebal={true}  callBackDelete={this.deleteUserButton}   callBackUpdate={this.UpdateUserButton} allcopleted={false} />
          }
    
          
        } if(Todos.CheacktUsersToDoCoplete(item.id,this.state.todos||this.state.isAllToDoCopleted)){
      return<UserDitelsComp  key={index}  allDataUser={item} callBack={this.tosos} lebal={false}  callBackDelete={this.deleteUserButton}   callBackUpdate={this.UpdateUserButton}  allcopleted={true}/>
        }else{
          return<UserDitelsComp  key={index}  allDataUser={item} callBack={this.tosos} lebal={false}  callBackDelete={this.deleteUserButton}   callBackUpdate={this.UpdateUserButton}  allcopleted={false}/>
        }
   
      }
   
    });
    return(
      <div>


      <div class="split left">
       
       
      <label>Search :  </label>
        <input type="text" onChange={this.search}></input>
        <input type="button" value="Add" onClick={this.AddUserButton}></input>
          {Users}
        
      </div>
      <div class="split right">
      {this.state.lebalclick && <div ><ToDosComp Data={this.state.userIdOnClickLabal}  callBack={this.callBackToDo}/></div>}
      {this.state.lebalclick && <div  ><PostComp Data={this.state.userIdOnClickLabal}/></div>}
      {this.state.AddUserButtonClick && <div  ><AddUserComp  callBackCancel={this.CenselButtonUser} callBackAdd={this.AddButtonUser} Data={this.state.userIdOnClickLabal}/></div>}
      </div> 
  
    
    </div>

   
    
    
    
    )
  }
}



export default SearchComp;