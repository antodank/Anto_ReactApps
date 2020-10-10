import React,{useState, useReducer} from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm';

export default function UserForm() {

    const userData = [
        {id : 0, firstname : "Ankit", lastname : "Todankar", email : "at@gmail.com"},
        {id : 1, firstname : "Viraj", lastname : "Todankar", email : "vt@gmail.com"}
    ];

    const [users, setusers] = useState(userData)

    const AddUser = (user) =>
    {
        user.id = users.length + 1;
        setusers([...users,user]);
    }

    return (
        <>
          <AddUserForm AddUser ={AddUser}></AddUserForm>
          <h2>View users</h2>
		  <UserTable users={users} AddUser ={AddUser} ></UserTable>  
        </>
    )
}
