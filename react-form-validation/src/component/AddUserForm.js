import React, { useState } from 'react'
import './AddStyle.scss'

export default function AddUserForm(props) {

    const InitialUser = {id: null, firstname: '',lastname:'', email: '' };

    const [user,setuser] = useState(InitialUser);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
       
        if(user.length > 0)
        {
            if(!user.firstname || !user.lastname  || !user.email)
                return;

            props.AddUser(user);    

           setuser(InitialUser);
        }
        else
            console.log("Hi");
    }

    const handleInputChange = (e) =>
    {
      const name = e.target.name;
      const value = e.target.value;
      //const [name,value] = e.target;
      console.log(e.target);

      setuser({...user,[name]: value});
      console.log(user);
    }

    return (
        <>
        <div class="container">
            <div class="signup">
                <div class="social clearfix">
                    <a class="social__button social__button--facebook" href=""><i class="fa fa-facebook" aria-hidden="true"></i>Connect with
                        Facebook</a>
                    <a class="social__button social__button--twitter" href=""><i class="fa fa-twitter" aria-hidden="true"></i>Connect
                        with Twitter</a>
                </div>
                <div class="signup__message signup__message--center">
                    <span class="">or sign up with</span>
                </div>
                <form onSubmit={handleSubmit} class="signup__form">
                    <div>
                        <input class="input input--small" type="text" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleInputChange} ></input>
                        <input class="input input--small" type="text" name="lastname" placeholder="Last Name" value={user.lastname} onChange={handleInputChange} ></input>
                    </div>
                    <div>
                        <input class="input" type="text" name="email" placeholder="email" value={user.email} onChange={ handleInputChange} ></input>
                    </div>

                    <div class="signup__message">
                        <span class="">By creating an account, you agree to our <a class="signup__link" href="#">terms & conditions.</a></span>
                    </div>

                    <button class="button button--submit" type="submit">Add</button>
                </form>
            </div>
        </div>
        <footer class="footer">

        </footer>
        </>
    )
}
