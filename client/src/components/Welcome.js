import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (<Fragment>
      <div className="">
        <h1 className="container text-center text-warning text-transform-uppercase font-weight-bold">FALCON GAS</h1>
        <div>
          <div>
            <label class="ml-5 text-success font-weight-bold">Please select account type:</label>
              <div>
              <ul Style = "list-style-type:none">
                <li><Link to="/users">
                    <button class="btn btn-warning text-success float-left ml-2 font-weight-bold mb-2">Agent</button></Link>
                  </li>
                  <div>
                  <li><Link to="/">
                    <button class="btn btn-warning text-success ml-4 font-weight-bold mb-2">Customer</button></Link>
                  </li>                    
                  </div>
                </ul>               
              </div>
          </div>
        </div>
      </div>
          
            
    </Fragment>
    )};

export default Welcome;