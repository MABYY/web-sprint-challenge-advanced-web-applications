import React , { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory} from "react-router-dom";

const Logout = (props) => {      
    const history = useHistory();

    useEffect(() => {
        axiosWithAuth().post('/logout')
        .then(res=>{
           localStorage.removeItem('token')
           history.push('/login')
        })
        .catch(err =>{ console.log('err',err)})
    }

    ,[])
    
    return(<div> See you later!</div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and 
// redirect to the login page.