import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (<Fragment>
      <div className="container d-flex">
        <h1 className="text-center text-warning  font-weight-bold">FALCON GAS</h1>
        <div>
          <div>
            <label className="text-center text-success font-weight-bold">Please select account type:</label>
              <div>
              <ul Style = "list-style-type:none">
                <li><Link to="/viewUsers">
                    <button className="btn btn-warning col-md-3 mr-10 text-success float-left font-weight-bold mb-2">Agent</button></Link>
                  </li>
                  <div>
                  <li><Link to="/">
                    <button class="col-md-3 mr-2 btn btn-warning text-success font-weight-bold mb-2">Customer</button></Link>
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