import React from 'react';
import './css/inputform.css'

export default function Register() {
    return (
        <div className="form-vertical">
            <form method="post" action="/account" id="create_customer" accept-charset="UTF-8">
            
            {/* <input type="hidden" name="form_type" value="create_customer"><input type="hidden" 
            name="utf8" value="✓"></input> */}

            <label for="FirstName">First Name</label>
            <input type="text" name="customer[first_name]" id="FirstName" class="input-full" 
            autocapitalize="words" autofocus=""></input>

            <label for="LastName">Last Name</label>
            <input type="text" name="customer[last_name]" id="LastName" class="input-full" 
            autocapitalize="words"></input>

            <label for="Email">Email</label>
            <input type="email" name="customer[email]" id="Email" class="input-full" autocapitalize="off"></input>

            <label for="CreatePassword">Password</label>
            <input type="password" name="customer[password]" id="CreatePassword" class="input-full"></input>

            <p>
                <input type="submit" value="Create" class="btn btn--full"></input>
            </p>

            </form>
        </div>
    )
}
