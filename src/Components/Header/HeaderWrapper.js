import {useState} from 'react';
import SideBar from '../SideBar/Sidebar';
import Icon from '../../assets/SandwichIcon.png';
import { Header, Image,} from './stylesHeader';
import { Switch } from '@mui/material';
import {GlobalStyles} from '../styles/GeralStyles'
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../styles/theme';
export default function HeaderWrapper() {
  const [showNav, setShownav] = useState(false)
  const[dado,set_dado] = useState();
  const ThemeToogler = ()=>{
    dado === "Light"? set_dado('Dark'): set_dado('Light')
  }
  return (
    <>
      <ThemeProvider theme={dado ==="Light"? LightTheme: DarkTheme}>
      <Header>
        <Image src={Icon} onClick={()=>setShownav(!showNav)} />
       <Switch defaultChecked onClick={()=>ThemeToogler()}/>
       {console.log(dado)}
       <GlobalStyles />
      </Header>
      <SideBar show={showNav} />
      </ThemeProvider>
    </>
  );
}


