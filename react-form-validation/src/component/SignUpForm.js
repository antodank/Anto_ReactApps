import React, { useState,useEffect,useRef } from 'react'

export default function SignUpForm() {

     // we use the help of useRef to test if it's the first render
    const firstRender = useRef(true)

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

      // we set it to true so that the form is disabled on first render
    const [disable, setdisable] = useState(true)
  
    // we can also set error messages to display to the user
    const [ErrorLine, setErrorLine] = useState(null)

    useEffect(() => {
         // we want to skip validation on first render
        // console.log(e);
        if (firstRender.current) {
            firstRender.current = false
            return
        }

        setdisable(formvalidation());
    },[name,email,password,confirmpassword]);


    const formvalidation = () => {
        if (name === "" || email === "" || password === "" || confirmpassword === "") {
            setErrorLine("This is required field'")
          return true
        } else {
            setErrorLine(null)
          return false
        }
      }

    const handlesave = () => {
         console.log("data submitted");
       }

    return (
        <div>
            <form name ="my-form" onSubmit={handlesave}>
                <div>
                <label htmlFor="name">Full name:</label>
                <input type = "text" name = "name" value = {name} onChange={ e => setname(e.target.value)} >
                </input>
                { ErrorLine && <p className="error">{ErrorLine}</p> }
                </div>

                <div>
                <label htmlFor="email">Email:</label>
                <input type = "text" name = "email" value = {email} onChange={e => setemail(e.target.value)} >
                </input>
                { ErrorLine && <p className="error">{ErrorLine}</p> }
                </div>

                <div>
                <label htmlFor="password">Password:</label>
                <input type = "password" name ="password" value= {password} onChange= {e=> setpassword(e.target.value)} >
                </input>
                { ErrorLine && <p className="error">{ErrorLine}</p> }
                </div>

                <div>
                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input type = "password" name = "confirmpassword" value= {confirmpassword} onChange={e => setconfirmpassword(e.target.value)} >
                </input>
                </div>

                <div>
                <input type="submit" name="submit" disabled={disable} />
                </div>
            </form>
        </div>
    )
}
