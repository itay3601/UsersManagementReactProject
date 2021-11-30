import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/users";


const getAllUsers = () =>
{
    return axios.get(url);
}

const getUsersEmails = async () =>
{
    let resp = await axios.get(url);
    let allUsersdata = resp.data;

    let emails = allUsersdata.map(x => x.email);

    return emails;
}
const addUser = async (obj) =>
  {

   

    let resp =  await axios.post(url,obj)
    console.log(resp.data);
  }
  const DeleteUser = async (ID,arrUsers) =>
  {

   let Users= arrUsers
   let UserAfterDelete=Users.filter(user=>user.id!=ID);
   return UserAfterDelete;

   
  }
  const UbdateeUser = async (obj,arrUsers) =>
  {
    arrUsers.forEach(user => {
        if(user.id==obj.id){
            user.name=obj.name;
            user.email=obj.email;
            user.address.street=obj.address.street;
            user.address.city=obj.address.city;
            user.address.zipcode=obj.address.zipcode;
        }
        
    });
  // let UserAfterDelete=
   return arrUsers;

   
  }



export default {getAllUsers, getUsersEmails,addUser,DeleteUser,UbdateeUser}