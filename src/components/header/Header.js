import React, { useState } from 'react';
import Login from '../login/Login'
import './Header.css'
import logo from '../../logo.svg';
import '../../'
import googleLogo from '../../imgs/googleLogo.svg'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css';
import { Router, Link } from "react-router-dom";


function useForceUpdate(){
    const [value, setState] = useState(true);
    return() => setState(!value);
}
function Header() {


    // This function continuously checks whether you are logged in or not.
    // It updates the account button accordingly
    setInterval(function(event) {
        if (document.getElementById("account") !== null){
    if (document.getElementById("account").disabled === true && global.isLoggedIn === true){
        document.getElementById("account").disabled = false;
    } else if (document.getElementById("account").disabled === false && global.isLoggedIn === false){
            document.getElementById("account").disabled = true;
        }
    }}, 400);

    return(

        <section className='header'>
           <Link to="/"> <img src={logo}  className="header-logo" alt="logo" /></Link>

            <div className = "account-and-login">
            <Login/>
            <Link to="/account" style = {{textDecoration:'none'}} ><Button id={"account"} className = "p-button-rounded"  disabled={global.isLoggedIn}> My account</Button></Link>

            </div>
        </section>


    )

}

export default Header;