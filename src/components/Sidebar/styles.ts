import { motion } from "framer-motion";
import styled from "styled-components";


interface SidebarProps{
     isDark?:boolean;
}
export const SidebarContainer = styled.div<SidebarProps>`
     flex:0.04;
     background:${props => props.isDark ? "var(--dark3)" : "var(--tertiary)"};
     color:var(--white);
     display:flex;
     flex-direction:column;
     align-items:center;
     padding:10px;
     z-index:2;
     transition:all 0.3s ease;
     `

interface SidebarItemProps extends SidebarProps {
     active?: boolean;
     svgColor?: string;
     svgSize?: string;
}
export const SidebarItem = styled.div<SidebarItemProps>`
     display:flex;
     align-items:center;
     width:50px;
     height:50px;
     justify-content:center;
     cursor:pointer;
     border-radius:180px;
     transition:all 0.2s ease;
     &:hover{
          border-radius:15px;
          
     }
     background:${props=> props.active ? "var(--quaternary)" : props.isDark ? "var(--dark4)" : "#fff"};
     margin-top:10px;
     
     svg{
          width:${props => props.svgSize ? props.svgSize : 25}px;
          height:${props => props.svgSize ? props.svgSize : 25}px;
          color:${props=> props.active ? "#fff" : props.svgColor ? props.svgColor :props.isDark ? "gray" : "#000"};
     }
     `