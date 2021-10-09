import React, { Fragment, useEffect, useState  } from "react";



const ClientView = () => {

    const  id = window.location.pathname;    

    const [user, setUser] = useState([]);
    

    
    

    const getUser = async () => {
        try {
            
            const response = await fetch(`/users${id}`);
            const jsonData = await response.json();            
            setUser(jsonData);
        } catch (err) {
            console.error(err.message);
        }
        
        console.log("data:", user.images);
        
    };

    useEffect(() => {
        getUser()
    }, []);



    return (
        <Fragment>
            
            <div class="container bootstrap snippets bootdey">
<div class="panel-body inf-content">
    <div class="row">
        <div class="mt-5 ml- 2 col-md-4">
            <img alt=""  title="" class="img-circle img-thumbnail isTooltip" src= "https://www.svgrepo.com/show/57853/avatar.svg" data-original-title="Usuario"></img> 
           
        </div>
        <div class="col-md-6 text-success">
            <strong>User Information</strong><br></br>
            <div class="table-responsive">
            <table class="table table-user-information">
                <tbody>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-asterisk text-primary"></span>
                                Account:                                                
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.account_num}     
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-user  text-primary"></span>    
                                First Name:                                                
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.firstname}     
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-cloud text-primary"></span>  
                                Last Name:                                                
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.lastname}  
                        </td>
                    </tr>

                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-bookmark text-primary"></span> 
                                NIN:                                                
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.nin} 
                        </td>
                    </tr>


                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-eye-open text-primary"></span> 
                                Location:                                               
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.location_detail}
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-envelope text-primary"></span> 
                                Mobile:                                                
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.mobile}  
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                Units:                                                
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.units}
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                Battery:                                                
                            </strong>
                        </td>
                        <td class="text-warning">
                        {user.battery}
                        </td>
                    </tr>                                    
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
</div>  <button className="btn btn-warning text-success" onClick={() => (window.location ="/users") }>back</button>                                      
        </Fragment>
    );
}


export default ClientView;