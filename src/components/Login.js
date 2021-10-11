import React ,{useState}from 'react';
import { useHistory } from 'react-router';
import axios from "axios";

import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth'


const Login = (props) => {
    const history = useHistory();

    const [credentials,setCredentials] = useState({
        username: "",
        password:"",
    })

    const [error,setError] = useState("")

    const handleOnchange = (e) =>{
        setError("")
        console.log(e.target)
        setCredentials({...credentials,[e.target.name]: e.target.value})
                }

    const formSubmit = (e) =>{
        e.preventDefault()
        axiosWithAuth().post('/login',credentials)
        .then(res=>{
            const tokenid = res.data.token
            localStorage.setItem('token',tokenid)
            props.settoken(tokenid)
            history.push('/view')
        })
        .catch(err=> { 
            console.log('err',err.response.data.error)
            setError(err.response.data.error)
        });

        setCredentials({ username: '', password: '' })
    }

    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            <FormGroup onSubmit={formSubmit} >
                <Label> Username: 
                    <Input type = 'text' 
                            id='username' 
                            name='username' 
                            value = {credentials.username} 
                            onChange={handleOnchange} />
                </Label>

                <Label> Password:
                    <Input type ='password' 
                            id = 'passoword' 
                            name = 'password' 
                            value = {credentials.password}
                            onChange={handleOnchange} />
                </Label>
                
                <Button id="submit" type='submit' >Log in</Button>
            </FormGroup>

            <p id='error'>{(error.length>0 ? error : "")}</p>

        </ModalContainer>
    </ComponentContainer>);
}

export default Login;

//Task List

//1. Build login form DOM from scratch, making use of styled components if needed. 
// Make sure the username input has id="username" and the password input as id="password".

//2. Add in a p tag with the id="error" under the login form for use in error display.

//3. Add in necessary local state to support login form and error display.

//4. When login form is submitted, make an http call to the login route. 
// Save the auth token on a successful response and redirect to view page.

//5. If the response is not successful, display an error statement.
//  **a server provided error message 
// can be found in ```err.response.data```**

//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. 
// YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
