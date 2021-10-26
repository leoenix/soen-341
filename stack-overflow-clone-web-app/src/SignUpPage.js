import styled from 'styled-components';
import DarkCyanButton from './DarkCyanButton';
import Header1 from './Header1';
import Input from './Input';
import axios from 'axios';
import { Component, useContext } from 'react';
import UserContext from './UserContext';
import {Redirect} from 'react-router-dom';

const Container = styled.div`
    padding: 30px 20px;
`;


class SignUpPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    register() {
        axios.post('http://localhost:3030/signup', {
            email: this.state.email,
            password: this.state.password,
        }, {withCredentials: true})
            .then(() => {

            });
    }

    render() {
        return(<>
            <Container>
                <Header1 style={{marginBottom: '20px'}}>Sign up</Header1>
                <Input placeholder={'email'} type="email" value={this.state.email} onChange={ev => this.setState({email: ev.target.value})} />
                <Input placeholder={'password'} type="password" value={this.state.password} onChange={ev => this.setState({password: ev.target.value})}/>
                <DarkCyanButton onClick={() => this.register()}>Sign up</DarkCyanButton>
            </Container>
        </>);
    }
}

SignUpPage.contextType = UserContext;



export default SignUpPage;