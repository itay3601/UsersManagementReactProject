import {Component} from 'react'
import OtherDataComp from'./OtherDataComp'
import Todos from './Utils/ToDoUtils' 
import './Appcopy.css';


class UserDitelsComp extends Component
{
  constructor(props)
  {
    super();
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {isHovering: false,UserTodos:[],isAllToDoCopleted:false,isLabelclick:false,
      name:props.allDataUser.name,
      email:props.allDataUser.email,
      street:props.allDataUser.address.street,
       city:props.allDataUser.address.city,
       zipcode:props.allDataUser.address.zipcode
    };
    
    
  }
  async componentDidMount(props)
  {
   
  
    // let resp = await Todos.getUsersToDo(this.props.allDataUser.id);
    // this.setState({UserTodos : resp});
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  lebalClick=()=>{

   
      let Data=this.props.allDataUser.id
      this.setState({isLabelclick:!this.state.isLabelclick})
      //this.setState({styleDiv:"RedStyleAndBackground"})
      return( this.props.callBack(Data))
   
  }
  deleteButton=()=>{
    return(this.props.callBackDelete(this.props.allDataUser.id))
  }
  updateButton=()=>{
    let obj={}
   obj.id=this.props.allDataUser.id
   obj.name=this.state.name;
   obj.email=this.state.email
   obj.address={}
   obj.address.street=this.state.street;
   obj.address.city=this.state.city;
   obj.address.zipcode=this.state.zipcode;
    return(this.props.callBackUpdate(obj))
  }
  nameChange=(e)=>{
    this.setState({name:e.target.value})
  }
  emailChange=(e)=>{
    this.setState({email:e.target.value})
  }
  streetchenge=(Street)=>{
    this.setState({street:Street})

  }
  Citychenge=(City)=>{
    this.setState({city:City})

  }
  Zipchenge=(Zip)=>{
    this.setState({zipcode:Zip})

  }
  
   






  render(props)
  {
   
    
      let styleName;
      if(this.props.lebal){
        if(this.props.allcopleted){
          styleName = "GreenStyleBackground";

        }else{
          styleName = "RedStyleAndBackground";
        }
   
    


      }else{
        if(this.props.allcopleted){
        styleName = "GreenStyle";
      }else{
        styleName = "RedStyle";
      }
    }
  

    return(
    <div  className={styleName} >

        <label onClick={this.lebalClick} value={this.props.allDataUser.id}>ID :  {this.props.allDataUser.id}</label><br></br>
        <label >Name: </label><input type="text" value={this.state.name} onChange={this.nameChange}></input><br></br>
        <label>Email   : </label><input type="text" value={this.state.email}  onChange={this.emailChange}></input><br></br>
        
        
        <div style={{ width:"80px"}}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
         
        >
             <input  type="button" value="other Data" ></input>
        </div>
       

        {this.state.isHovering && <div  style={{border:"1px solid red",margin:"10px",padding:"10px",width:"200px"}}  ><OtherDataComp data={this.props.allDataUser} callBackChangeSteet={this.streetchenge} callBackChangeCity={this.Citychenge} callBackChangeZip={this.Zipchenge}/></div>}
        
        <input style={{marginLeft:"200px"}} type="button" value="Update"  onClick={this.updateButton}></input>
       
       <input type="button" value="Delete" onClick={this.deleteButton}></input>
       
    </div>)
  }
}



export default UserDitelsComp;