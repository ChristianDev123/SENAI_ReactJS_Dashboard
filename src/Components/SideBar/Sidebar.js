import logoImg from '../../assets/logoImg.svg';
import logoTxt from '../../assets/logoTxt.svg';
import {GithubIcon, LogoWrapper, MainIcon, SectionDivider, SectionName, SideNavBar} from './stylesSidebar';

export default function SideBar({show}){
    return(
        <SideNavBar className={show ? 'sidenav active' : ''}>
            <LogoWrapper>
                <img src={logoImg}/>
                <img src={logoTxt}/>
            </LogoWrapper>
            <SectionDivider>
                <SectionName>Home</SectionName>
                <ul>
                    <li>
                        <a><MainIcon/> Dashboard</a>
                    </li>
                </ul>
            </SectionDivider>
            <SectionDivider>         
                <a>Contatos</a>
                <ul>
                    <li>
                        <a href="https://github.com/karirike"><GithubIcon/>Kaike</a>
                    </li>

                    <li>
                        
                        <a href="https://github.com/joaolima16"><GithubIcon/> João</a>
                    </li>

                    <li>
                        <a href="https://github.com/leonardodiaskt"><GithubIcon/> Leonardo</a>
                    </li>

                    <li>
                        <a href="https://github.com/ChristianDev123"><GithubIcon/> Christian</a>
                    </li>
    
                    <li>
                        <a href="https://web.whatsapp.com/"><GithubIcon/> Gabriel</a>
                    </li>
                </ul>
            </SectionDivider>
        </SideNavBar>
    )
}