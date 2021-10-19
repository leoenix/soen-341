import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './Login.css'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css';
import googleLogo from '../../imgs/googleLogo.svg'
const clientId = "275373425860-n5ev9s124duu5iklhtpg9i03fi59vjr4.apps.googleusercontent.com";
if (!global.isLoggedIn){
    global.isLoggedIn = false;
}
function Login() {

    const [loginButton, showLoginButton] = useState(true);
    const [logoutButton, showLogoutButton] = useState(false);
    const onSuccessfulLogin = (res) => {
        global.isLoggedIn = true;
        showLoginButton(false);
        showLogoutButton(true);
    };

    const onFailedLogin = (res) => {
        console.log(res);
    };

    const onSuccessfulSignOut = () => {
        global.isLoggedIn = false;
        alert("Successful Logout");
        showLoginButton(true);
        showLogoutButton(false);

    };

    return (
        <div>
            { loginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    render={renderProps => (
                        <Button onClick={renderProps.onClick} className = "p-button-rounded" > <div className={"google-div"}><img src={googleLogo}  className="google-logo" alt="logo" /></div> Sign in</Button>
                    )}
                    onSuccess={onSuccessfulLogin}
                    onFailure={onFailedLogin}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}

                /> : null}

            { logoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"      render={renderProps => (
                    <Button onClick={renderProps.onClick} className = "p-button-rounded" > <div className={"google-div"}><img src={googleLogo}  className="google-logo" alt="logo" /></div> Sign out</Button>
                )}
                    onLogoutSuccess={onSuccessfulSignOut}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Login;