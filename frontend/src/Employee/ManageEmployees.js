import React, {useState, useEffect} from "react";
import axios from "axios";
import './ManageEmployees.css'
import Sidebar from '../Components/Sidebar'

function ManageEmployees(){

    const [employees, setEmployees] = useState([]);
    let content = null
    useEffect(()=>{
        function getEmployees(){
            axios.get("http://localhost:8070/Employee").then((res)=>{
                setEmployees(res.data);   
            }).catch((err)=> {
                alert(err.message);
            })
        }
        getEmployees();
    },[])
    
    
 
    return(
        <div className="app" >
        <Sidebar activemenu={'EMPLOYEE'} submenu={'EMPLOYEE_LIST'} />
       
        <><div>
            <center><h4>Manage Employees</h4></center>
            <br></br>
            <div>{content}</div>
        </div><table class="table">
                <thead>
                    <tr className="container">
                        <th scope="col">Employee First Name</th>
                        <th scope="col">Employee Last Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Employee NIC</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Address</th>
                        <th scope="col">Account Number</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item)=>
                    <tr key={item._id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item. phoneNumber}</td>
                    <td>{item. empNIC}</td>
                    <td>{item. email}</td>
                    <td>{item. address}</td>
                    <td>{item.accountNumber}</td>
                    <td>{item. empType}</td>
                    <button size='sm' variant='primary'> Update</button>
                    <button size='sm' variant='warning'> Delete</button>
                    <button size='sm'  variant='danger'> Calculate</button>
                    </tr>
                    )}
                   
                </tbody>
            </table></>
            </div>
    )
}

export default ManageEmployees;