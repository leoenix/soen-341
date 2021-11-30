import styled from 'styled-components';
import DarkCyanButton from './DarkCyanButton';
import Header1 from './Header1';
import Input from './Input';
import axios from 'axios';
import {Component, useContext} from 'react';
import UserContext from './UserContext';
import {Redirect} from 'react-router-dom';
// render
const Container = styled.div`
  padding: 18px;
`;


class SignUpPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            userExists: false,
            accountCreated: false,
            invalidEmail: false,
            missingPassword: false
        }
    }

    checkBoxChecked(param) {
        return param
    }

    signup() {
        axios.post('http://localhost:3030/signup', {
            email: this.state.email,
            password: this.state.password,
        }, {withCredentials: true})
            .then(() => {
                this.checkBoxChecked(true);
                this.setState({accountCreated: true})
            }).catch(e => {
                this.checkBoxChecked(false);
            this.setState({userExists: true})
        });
    }

    checkAppropriateEmail(email) {
        const emailRedux = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this) {
            this.setState({invalidEmail: false, userExists: false, accountCreated: false, missingPassword: false})
            if (emailRedux.test(email) && this.state.password.length > 0) {
                this.signup();
            } else if (this.state.password.length === 0){
                this.setState({missingPassword: true})
            } else {
                this.setState({invalidEmail: true})
            }
        }
    }

    render() {
        return (<>
            <Container>
                <Header1 style={{marginBottom: '20px'}}>Sign up</Header1>
                <form onSubmit={() => this.signup()}></form>
                <Input placeholder={'email'} type="email" value={this.state.email}
                       onChange={ev => this.setState({email: ev.target.value})}/>
                <Input placeholder={'password'} type="password" value={this.state.password}
                       onChange={ev => this.setState({password: ev.target.value})}/>
                <DarkCyanButton onClick={() => this.checkAppropriateEmail(this.state.email)}>Sign up</DarkCyanButton>
                {this.state.userExists && (
                    <span style={{color: 'red', padding: 12 + 'px'}}>  User already exists</span>
                )} {this.state.invalidEmail && (
                <span style={{color: 'red', padding: 12 + 'px'}}>  Invalid email</span>
            )}{this.state.missingPassword && (
                <span style={{color: 'red', padding: 12 + 'px'}}>  Missing password</span>
            )}{this.state.accountCreated && (
                <span style={{color: 'green', padding: 12 + 'px'}}>  Account successfully created. If you wish to log in, head to the log in page.</span>
            )}
            </Container>
        </>);
    }
}

SignUpPage.contextType = UserContext;


export default SignUpPage;