import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (<Fragment>
      <div className="">
        <h1 className="container text-center text-warning  font-weight-bold">FALCON GAS</h1>
        <div>
          <div>
            <label className="container text-center text-success font-weight-bold">Please select account type:</label>
              <div>
              <ul Style = "list-style-type:none">
                <li><Link to="/viewUsers">
                    <button className="container btn btn-warning text-success float-left font-weight-bold mb-2">Agent</button></Link>
                  </li>
                  <div>
                  <li><Link to="/">
                    <button class="container mr-4 btn btn-warning text-success font-weight-bold mb-2">Customer</button></Link>
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