import React , {useState} from 'react';
import { Route, Redirect, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {

  const [tokenid , setTokenid] = useState(localStorage.getItem('token'))

  return (
    <AppContainer>
      <LambdaHeader/>
      <Header tokenid={tokenid}/>
      <RouteContainer>
        <Switch>

          <Route exact path ='/login' render = {(props)=>(<Login {...props} settoken = {setTokenid}/>)} />
          <PrivateRoute exact path ='/view' component={View}/>
          <PrivateRoute exact path ='/logout' component={Logout}/>
          <Route exact path="/"  render = {(props)=>(<Login {...props} settoken = {setTokenid}/>)} />
        </Switch>
      
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
