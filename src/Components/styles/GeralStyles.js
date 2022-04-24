import styled,{createGlobalStyle} from 'styled-components';
export const GlobalStyles =  createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    :root{
        --primary:#F3DC0D;
        --importants-texts:rgba(0,0,0,0.45);
    }
    body{
        transition: 1s;
        background: ${(props)=> props.theme.colors.background};
        color: ${(props)=>props.theme.colors.text}
    }
`