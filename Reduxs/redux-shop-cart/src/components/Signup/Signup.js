import React,{useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import "./style.scss"

import Button from './../forms/Button/Button'
import FormInput from '../forms/FormInput/FromInput'
import AuthWrapper from '../AuthWrapper/AuthWrapper';

export default function Signup(props) {
    const [displayName, setDisplayName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const { register,handleSubmit } = useForm();

    const handleFormSubmit = (data) => 
    {
        console.log(data);
    }

    return (
        <AuthWrapper headline="Registration">
        <div className="formWrap">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormInput ref = {register}
            label = "Full Name"
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={e => setDisplayName(e.target.value)} />
            
            <FormInput ref = {register}
            label = "Email"
            type =  "text"
            name = "Email"
            value = {email}
            placeholder = "email"
            handleChange = {e => setemail(e.target.value)}></FormInput>

            <FormInput ref = {register}
            label = "Password"
            type = "password"
            name = "Password"
            value = {password}
            placeholder = "Password"
            handleChange = { e => setpassword(e.target.value)}></FormInput>

            <FormInput ref = {register}
            label = "Confirm Password"
            type= "password"
            name = "ConfirmPassword"
            value = {password}
            placeholder = "Confirm Password"
            handleChange = { e=> setconfirmpassword(e.target.value) }></FormInput>

            <Button type='submit'>Submit</Button>
            </form>
        </div>
        </AuthWrapper>
    )
}
