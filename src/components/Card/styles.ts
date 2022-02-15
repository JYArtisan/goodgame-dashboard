import styled from "styled-components"

interface CardProps{
     isDark: boolean;
}
export const CardContainer = styled.div<CardProps>`
     display:flex;
     flex-direction:column;
     transition: all 0.3s ease;
     ${props => props.isDark ? `
     
     background: var(--dark3);
     border:1px solid transparent;
     color:white;
     ` : `
     background:white;
     border:1px solid lightgray;
     
     color:black;
     `};
    
     box-shadow:0px 0px 10px rgba(0,0,0,0.5);
     border-radius:40px;
     width:100%;
     height:350px;
     margin-right:20px;
     margin-top:20px;
     position:relative;
     pre{
          margin:0;
          padding:0;
          padding-left:20px;
          font-weight:700;
          font-size:20px;
     }
     .div{
          padding-left:20px;
          display:flex;
          align-items:center;
          .online{
               display:flex;
               align-items:center;
               justify-content:center;
               width:8px;
               height:8px;
               border-radius:50%;
               background:#29cc7a;
               margin-right:5px;
          }
     }
     
     z-index:2!important;
     `
     interface ICardHeaderProps{
          background?:string;
     }
export const CardHeader = styled.div<ICardHeaderProps>`
     height:150px;
     background:var(--dc);
     z-index:2;
     background-image:url(${props => props.background});
     background-size:100% 100%;
     background-position:center;
     
     border-top-left-radius:40px;
     border-top-right-radius:40px;
     position:relative;
     overflow:hidden;
     // &:after {
     //      content:'';
     //   top:0;
     //      transform:translateX(100%);
     //      width:100%;
     //      height:220px;
     //      position: absolute;
     //      z-index:1;
     //      animation: slide 3s infinite;
           
     //   /* 
     //   CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
     //   */
     //   background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */
     //      background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.8)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
     //      background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
     //      background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
     //      background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
     //      background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */
     //      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
     // }
     
     `

export const CardAvatar = styled.div<CardProps>`
     width:100px;
     height:100px;
     background:${props => props.isDark ? `var(--dark3)` : `var(--primary)`};
     border-radius:50%;
     margin-left:20px;
     position:relative;
     z-index:2;
     transition: all 0.3s ease;
     margin-top:-60px;
     img{
          width:100%;
          height:100%;
          border-radius:50%;
          padding:5px;
     }
     `

export const InviteButton = styled.button`
     background:#19b375;
     border:none;
     border-radius:15px;
     padding:10px;
     color:white;
     font-weight:700;
     font-size:20px;
     margin-top:20px;
     margin-left:20px;
     margin-right:20px;
     margin-bottom:20px;
     outline:none;
     cursor:pointer;
     `