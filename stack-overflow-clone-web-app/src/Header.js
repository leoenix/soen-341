import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/fontawesome-free-brands'


const StackOverflowHeader = styled.header `
    background-color: #FC9F3F;
    box-shadow: 0 2px 2px rgba(0,0,0,2);
    display: grid;
    grid-template-columns: 220px 1fr 200px;
    grid-column-gap: 20px;
`;

const LogoHyperlink = styled.a`
    color: #000000;
    text-decoration: none;
    display: inline-block;
    height: 50px;
    line-height: 30px;
    padding: 0px 15px;
    svg{
        margin-top: 7px;
        display: inline-block;
        float: left;

    }
    span{
        display: inline-block;
        padding-left: 5px;
        padding-top: 10px;
        font-size: 1.2rem;
        font-weight:300;
    }
    b{
        font-weight: normal;
        display: inline-block;
        margin-left: 2px;
    }
`;

const SearchBarInput = styled.input`
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #000;
    border-radius: 3px;
    background: rgba(252, 159, 63, 4);
    padding: 8px 10px;
    margin-top: 9px;
`;

const ProfileLink = styled.a`
    color: #000000;
    text-decoration: none;
    line-height: 50px;
`;

function Header() {
    return(
        <StackOverflowHeader>
            <LogoHyperlink href="" className="logo">
                <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
                <span>stack<b>overflow</b> </span>
            </LogoHyperlink>
            <form action="" className="search">
                <SearchBarInput type="text" placeholder="Search..."/>
            </form>
        <ProfileLink href="" className="profile">Profile</ProfileLink>
      </StackOverflowHeader>
    );
}

export default Header;