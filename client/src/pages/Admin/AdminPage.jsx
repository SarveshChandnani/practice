import React, { useEffect , useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './Adminpage.css'
const AdminPage = () => {
  const [data, setData] = useState([]);
 useEffect(()=>{

   getUser();

 }, []);

 const getUser = ()=>{
    fetch('/allUsers', {
        method : 'GET',
       })
     .then((res) => res.json())
       .then((data)=>{
        
         setData(data);
       } )
 }

console.log(data);

const deleteUser = async (name , id)=>{
      if(window.confirm(`Are you sure you want to delet ${name}`)){
        const res = await fetch('/deleteUser' , {
            method : 'POST',
            crossDomain : true,
            headers:{
                "Content-Type" : "application/json",
           },
           body: JSON.stringify({
            uid: id,
           }),

         });

         if(res.status === 200){
            console.log("henlooooooooooooo");
            // window.alert("Deleted");
            getUser();
         }

      }else{

      }
}

  return (
    <div className='container'>
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">User Data</h5>
    
    <table className='table'>
        <tr>
            <th>Name</th>
            <th>Company Name</th>
            <th>SPOC Name</th>
            <th>SPOC Email</th>
            <th>SPOC Phone</th>
            <th>Delete</th>
        </tr>
        {data.map(user => {
            return(
                <tr>
                    <td>{user.username}</td>
                    <td>{user.companyname}</td>
                    <td>{user.companyspocname}</td>
                    <td>{user.companyspocemail}</td>
                    <td>{user.companyspocphone}</td>
                    <td>
                    <FontAwesomeIcon icon={faTrash} onClick={()=> deleteUser(user.username , user._id)}/>
                    
                    </td>
                </tr>
            )
        })}
    </table>

    </div>

        </div>
    </div>
  )
}

export default AdminPage