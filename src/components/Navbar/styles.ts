import styled from "styled-components"

interface Props{
     isDark?:boolean;
}
export const SiteLogo = styled.div<Props>`
     display:flex;
     align-items:center;
     
     color:${props => props.isDark ? "var(--dc)" : "white"};

`
export const Title = styled.div`
     display:flex;
     font-size:1.5rem;
     font-weight:700;
     margin-right:5px;
`

export const SubTitle = styled.div`
     display:flex;
`


export const SearchBar = styled.div<Props>`
     width:500px;
     display:flex;
     align-items:center;
     background:${props => props.isDark ? "var(--dark2)" : "var(--primary)"};
     border-radius:5px;
     color:${props => props.isDark ? "gray" : "var(--dc)"};
     transition:all 0.3s ease;
     padding:10px;
     input{
          width:100%;
          border:0;
          background:none;
          color:white;
          font-weight:700;
          outline:none;
          
     &::placeholder{
          color:${props => props.isDark ? "gray" : "var(--dc)"};
     }
     }
     svg{
          margin-right:5px;
          width:20px;
          height:20px;
     }
     `