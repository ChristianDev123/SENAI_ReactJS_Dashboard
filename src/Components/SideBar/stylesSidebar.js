import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai';
import {MdDashboard} from 'react-icons/md';

export const SideNavBar = styled.section`
    display:none;
    background: white;
    position: fixed;
    width:240px;
    height: 100vh;
    padding: 0 10px;
    left: -100% ;
    margin-top:68px;
    &.active{
        display:inline;
        margin-right: 4px;
        border: 1px solid rgb(185, 149, 149);
        left:0;
    }
    & img{
        margin: 2px;
        height: 30px;
    }
    overflow-y: none;
    z-index: 2;
`;
export const LogoWrapper = styled.section`
    margin-top: 20px;
    display:flex;
    align-items:center;
    justify-content: center;
`;
export const SectionDivider = styled.section`
    padding:5px 0;
    & ul, & li{
        list-style-type: none;
        margin: 10px 0;
    }
    & ul a{
        color: black;
        text-decoration: none;
        font-size: 16px;
        display: block;
        padding: 10px 15px ;
        border-radius: 6px;
    }
    & ul a:hover{
        color: black;
        background-color: #E5E5E5;
    } 
`;
export const SectionName = styled.h2`
    color:rgba(0,0,0,0.75);
    font-size:16px;
`;
export const GithubIcon = styled(AiFillGithub)`
    font-size:22px;
    margin-right:10px;
`;
export const MainIcon = styled(MdDashboard)`
    font-size:22px;
    margin-right:10px;
`;