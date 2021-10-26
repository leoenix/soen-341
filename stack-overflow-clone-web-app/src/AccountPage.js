import {useContext, useState} from 'react'
import axios from "axios";
import DarkCyanButton from './DarkCyanButton';
import styled from "styled-components";
import {Redirect} from 'react-router-dom';
import Header1 from './Header1';
import UserContext from './UserContext';

const Container = styled.div`
    padding: 18px;
`;

function AccountPage() {
    const [goToIndex, setGoToIndex] = useState(false);
    const {checkAuth} = useContext(UserContext);
    function logout(){
        axios.post('http://localhost:3030/logout', {}, {withCredentials: true}).then(() => {
            checkAuth().catch(() => setGoToIndex(true));});
    }

    return(
        <>
        {goToIndex && (
            <Redirect to ={'/'} />
        )}
        <Container>
            <Header1>My account</Header1>
        <DarkCyanButton onClick={() => logout()}>
            Logout
        </DarkCyanButton>

        </Container>
        </>
    );
}
AccountPage.contextType = UserContext;

export default AccountPage;