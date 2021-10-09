import React, { Fragment } from "react";

const ListTodos = () => {
    return <Fragment>
         <table class="table mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>                        
                        <th>NIN</th>
                        <th>Phone</th>
                    </tr>
                </thead>
            </table>
        </Fragment>
};

export default ListTodos;