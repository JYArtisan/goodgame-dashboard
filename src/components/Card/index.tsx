import React from 'react'
import { CardContainer, CardHeader,CardAvatar, InviteButton } from './styles'

import room from "../../assets/room.jpg"
import { useSelector } from 'react-redux'
import { RootState } from '../..'


interface Props{
     title: string,
     description: string,
     src: string,
     memberCount: number,
}

export interface ICard{
     icon: string,
     id:string,
     memberCount: number,
     members: Array<any>,
     name: string,
     createdAt: string,
}

const Card = (props: Props) => {
     const theme = useSelector((state:RootState) => state.theme)
  return (
    <CardContainer isDark={theme.isDark}>
         <CardHeader background={room} />
         <CardAvatar isDark={theme.isDark}>
                 <img src={props.src} alt=""/>
         </CardAvatar>
         <pre>{stringTruncate(props.title,60)}</pre>
         
         <div className='div'><div className="online"/>Online: {props.memberCount} </div>
         <InviteButton>Join</InviteButton>
    </CardContainer>
  )
}

var stringTruncate = function(str:string, length:number){
     var dots = str.length > length ? '...' : '';
     return str.substring(0, length)+dots;
   };
export default Card