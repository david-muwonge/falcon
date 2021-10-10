import React, { Fragment, useState} from "react";
import { Link } from "react-router-dom";

const NewClient =() => {

    const [description, setDescription] = useState();
    const [description1, setDescription1] = useState();
    const [description2, setDescription2] = useState();
    const [description3, setDescription3] = useState();
    const [description4, setDescription4] = useState();
    const [description5, setDescription5] = useState();
    const [description6, setDescription6] = useState();

    var acc = Math.floor(1000000000 + Math.random() * 9000000000);

    

    const onSubmitForm = async (e, event) => {
        e.preventDefault();
        
        try {
            const body = [ description, description1, description2, description3, description4, description5, description6, acc ];
            // eslint-disable-next-line
            const response = await fetch("/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
                
            });
            
            window.location = "/viewUsers";
            
        } catch (err) {
            console.error(err.message);
            
        }
    };


    return (
        <Fragment>
            {/*
             <li class="dropdown nav-item">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div class="photo">
                    <img src="" alt="Profile Photo"/>
                  </div>
                  <b class="caret d-none d-lg-block d-xl-block"></b>
                  <p class="d-lg-none">
                    
                  </p>
                </a>
                <ul class="dropdown-menu dropdown-navbar">
                  <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Profile</a></li>
                  <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Settings</a></li>
                  <li class="dropdown-divider"></li>
                  <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Log out</a></li>
                </ul>
              </li>
            
                    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success">Add</button> 
                </form> */}

            <form className="container-fluid bg-success" onSubmit={onSubmitForm}>
                <h1 className="container-fluid text-left text-warning bg-success font-weight-bold">Customer Sign Up</h1>
                
                <div class="form-row">
                    <div class="col-md-4 mb-3 font-weight-bold">
                        <label for="validationServer01">First name</label>
                        <input type="text" class="form-control is-valid" id="validationServer01"  placeholder="First name" value= {description}  onChange={e => setDescription(e.target.value)} onChange={event => setDescription(event.target.value.toUpperCase())} required/>
                        <div class="invalid-feedback">
                            Looks good!
                        </div>
                                
                    </div>

                    <div class="col-md-4 mb-3 font-weight-bold">
                        <label for="validationServer02">Last name</label>
                        <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value={description1}  onChange={e => setDescription1(e.target.value)} onChange={event => setDescription1(event.target.value.toUpperCase())} required/>
                        <div class="invalid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div class="col-md-4 mb-3 font-weight-bold">
                        <label for="validationServerUsername">Mobile</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend3">#</span>
                            </div>
                            <input type="text" class="form-control is-valid" id="validationServerUsername" placeholder="Mobile" aria-describedby="inputGroupPrepend3" value={description2}  onChange={e => setDescription2(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>

                </div>

                <div class="form-row">
                    <div class="col-md-9 mb-3 font-weight-bold">
                        <label for="validationServer03">Location</label>
                        <input type="text" class="form-control is-valid" id="validationServer03" placeholder="Description" value={description3}  onChange={e => setDescription3(e.target.value)} onChange={event => setDescription3(event.target.value.toUpperCase())} required/>
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>

                    <div class="col-md-3 mb-3 font-weight-bold">
                        <label for="validationServer04">District
                            <select class="form-control col-md-15 mb-3 mt-2" value={description4} onChange={e => setDescription4(e.target.value)}>
                                <option value="KAMPALA">KAMPALA</option>
                                <option value="WAKISO">WAKISO</option>
                                <option value="MUKONO">MUKONO</option>
                            </select>
                        </label>
                        
                        <div class="invalid-feedback">
                            Please provide a valid District.
                        </div>
                    </div>

                    <div class="col-md-3 mb-3 font-weight-bold">
                        <label for="validationServer04">Serial Number</label>
                        <input type="text" class="form-control is-valid" id="validationServer04" placeholder="Serial Number" value={description5}  onChange={e => setDescription5(e.target.value)} required/>
                        <div class="invalid-feedback">
                            Please provide a valid District.
                        </div>
                    </div>

                    <div class="col-md-3 mb-3 font-weight-bold">
                        <label for="validationServer05">National ID</label>
                        <input type="text" class="form-control is-valid" id="validationServer05" placeholder="NIN" value={description6}  onChange={e => setDescription6(e.target.value)} onChange={event => setDescription6(event.target.value.toUpperCase())} required/>
                        <div class="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>

                </div>

                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input is-valid" type="checkbox" value="" id="invalidCheck3" required/>
                        <label class="form-check-label text-warning" for="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <button class="btn btn-warning text-success font-weight-bold mb-2" type="submit">Submit form</button>
                <ul Style = "list-style-type:none"> 
                <li><Link to="/viewUsers">
                    <button class="btn btn-warning text-success ml-2 font-weight-bold">Cancel</button></Link>
                  </li>
                </ul>
            </form>
        </Fragment>
    );    
};

export default NewClient;