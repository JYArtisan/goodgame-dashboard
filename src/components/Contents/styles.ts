import styled from "styled-components"

interface ContentProps{
     isDark?:boolean;
}
export const Content =   styled.div<ContentProps>`
          flex:1;
          display:flex;
          flex-direction:column;
          padding:20px;
          padding-top:50px;
          border-top-left-radius:20px;
          background:${props => props.isDark ? "var(--dark5)":"var(--background)"};
          overflow:hidden;
          transition:all 0.3s ease;
          `