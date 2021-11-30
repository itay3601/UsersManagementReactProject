import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos";


const getAllToDo = () =>
{
    return axios.get(url);
}
const getUsersToDo = async (userId) =>
{
    let resp = await axios.get(url);
    let allUsersdata = resp.data;

    let ToDos = allUsersdata.filter(x => x.userId==userId);
    return ToDos;
}
const CheacktUsersToDoCoplete =  (userId,arrTodo) =>
{
    let bol=true;
   

    let ToDos = arrTodo.filter(x => x.userId==userId);
     ToDos.forEach((alment=>{
         if(alment.completed==false){
             bol=false;
         }

     }))
    
     return bol;
}
const UbdateMarkCompleted = async (id,arrToDo) =>
{
    arrToDo.forEach(ToDo => {
      if(ToDo.id==id){
        ToDo.completed=true
        
      }
      
  });
// let UserAfterDelete=
 return arrToDo;

 
}




export default {getAllToDo,getUsersToDo,CheacktUsersToDoCoplete,UbdateMarkCompleted}