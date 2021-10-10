import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UserPage = () => {

    const [users, setUsers] = useState([]);
   

    
    async function getUsers() {
        const response = await fetch("/users");
        const jsonData = await response.json();
        setUsers(jsonData);        
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (<Fragment>       

         <table Style="widith:100%" className="table mt-1 text-success">
           
                <thead Style="vertical align:bottom">
                    <tr>
                        <th>No.</th>
                        <th colspan="2">First Name:</th>
                        <th colspan="2">Last Name:</th>
                        <th colspan="2">Phone:</th>
                        <th colspan="2">Location:</th>                        
                    </tr>
                </thead>
                          
                
                 <tbody>
                       {users.map((user) => (
                    <tr key={user.user_id}>
                        <th>{user.user_id}</th>
                        <th>{user.firstname}</th>,
                        <th>{user.lastname}</th>,
                        <th>{user.mobile}</th>,
                        <th>{user.location_detail}</th>
                        <th>
                            <ul Style = "list-style-type:none">
                                <li>
                                    <Link to={{
                                        pathname:`/view/${user.serial}`,
                                        state:{ id: user.user_id}}}>
                                        <button class="btn btn-warning float-left text-success ml-10 font-weight-bold ">
                                            view
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </th>
                    </tr>    
                    ))}
                   
                </tbody>
               
            </table>
            <ul Style = "list-style-type:none">
            
                <li><Link to="/newclient">
                    <button class="btn btn-warning float-left text-success ml-2 font-weight-bold">New Customer</button></Link>
                </li>
            
                <li><Link to="/">
                    <button class="btn btn-warning float-right text-success mr-5 font-weight-bold">Home</button></Link>
                </li>
            </ul>

        </Fragment>
    )};

export default UserPage;