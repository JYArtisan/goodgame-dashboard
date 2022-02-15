import styled from "styled-components"

interface Props{
     background?:string;
}
export const BannerRectangle = styled.div<Props>`
     width: 100%;
     height:250px;
     background:var(--quaternary);
     border-radius:40px;
     box-shadow:rgba(0,0,0,0.2) 0px 1px 0px 0px;
     background-image:url(${props => props.background});
     z-index:1;
     display:flex;
     flex-direction:column;
     align-items:flex-start;
     padding:30px;
     padding-top:50px;
     padding-left:50px;
     position:relative;
     overflow:hidden;
     h3{
          font-size:2.4rem;
          font-weight:bold;
          color:white;
          width:100%;
          z-index:2;
          text-shadow:0px 0px 10px rgba(0,0,0,0.2);
     }
     span{
          color:white;
          width:100%;
          z-index:2;
     }
     img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
     .emojis{
          position:absolute;
          right:-100px;
          top:20px;
          user-select:none;
          width:400px;
          transform:scaleX(-1);
     }
     .round{
          position:absolute;
          left:-280px;
          bottom:0px;
          user-select:none;
          width:500px;
          transform:scaleX(-1);
     }
     .memoji{
          position:absolute;
          left:0px;
          bottom:0px;
          user-select:none;
        
          width:120px;
          height:120px;

     }
     `