import React from 'react'
import { BannerRectangle } from './styles'

import emojis from "../../assets/1.svg"
import round from "../../assets/2.svg"
import { useSelector } from 'react-redux'
import { RootState } from '../..'
type Props = {}

const Banner = (props: Props) => {
  const sidebarTab = useSelector((state: RootState) => state.sideBar)
  return (
    <BannerRectangle className="container">
         <img src={emojis} alt="" className='emojis'
         onContextMenu={(e) => {
               e.preventDefault()
         }
         }
         />
         <h3>{sidebarTab.tabTitle}</h3>
         <span>
         GG is a new Discord server rank-up system. <br/> Add GG bot to your server and enjoy the popularity.
         </span>
    </BannerRectangle>
  )
}

export default Banner