import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     color: var(--white);
   }
   html, body, #root {
     max-width: 100vw;
     max-height: 100vh;
     width: 100%;
     height: 100%;
   }
   *, button, input {
     border: 0;
     background: none;
     font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
   }
   :root{
        --primary:#fff;
        --secondary:#e3e5e8;
        --tertiary:#e3e5e8;
        --quaternary:#404eed;
        --background:#fff;
        --dc:#404eed;
        --dark:#2f3136;
        --dark2:#202225;
        --dark3:#202225;
        --dark4:#36393f;
        --dark5:#36393f;
   }
     `

interface ThemeProps {
  isDark: boolean;
}
export const Nav = styled.nav<ThemeProps>`
z-index:2;
background: ${props => !props.isDark ? "var(--quaternary);" : "var(--dark)"};
height: 70px;
transition: all 0.3s ease;
`