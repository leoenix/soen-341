import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/fontawesome-free-brands'


const StackOverflowHeader = styled.header `
    background-color: #FC9F3F;
    box-shadow: 0 2px 2px rgba(0,0,0,2);
    display: grid;
    grid-template-columns: 200px 1fr 200px;
`;

const LogoHyperlink = styled.a`
    color: #000000;
    text-decoration: none;
    display: inline-block;
    height: 50px;
    line-height: 30px;
    padding: 0px 15px;
    svg{
        margin-top: 10px;
        display: inline-block;
        float: left;
    }
    span{
        display: inline-block;
        padding-left: 5px;
        padding-top: 15px;
    }
    b{
        font-weight: bold;
    }
`;


function Header() {
    return(
        <StackOverflowHeader>
            <LogoHyperlink href="" className="logo">
                <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
                <span> Stack <b>overflow</b> </span>
            </LogoHyperlink>
            <form action="" className="search">
                <input type="text" placeholder="Search..."/>
            </form>
        <a href="" className="profile">Profile</a>
      </StackOverflowHeader>
    );
}

export default Header;