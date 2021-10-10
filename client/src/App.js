import React, { Fragment } from "react";
import "./App.css";




import Welcome from "./components/Welcome";
import UserPage from "./components/UserPage";
import NewClient from "./components/NewClient";
import ClientView from "./components/ClientView";
import {Route} from "react-router-dom";





function App() {
    return (
        <Fragment>
            <div className="">
               <Route exact path="/" component={Welcome} />
               <Route exact path="/viewUsers" component={UserPage} />
               <Route exact path="/newclient" component={NewClient} />
               <Route exact path="/view/:id" component={ClientView} />
            </div>            
        </Fragment>
    );
}

export default App;