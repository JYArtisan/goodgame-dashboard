import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  House, Plus, PlusCircleDotted } from 'styled-icons/bootstrap'
import { Discord } from 'styled-icons/fa-brands'
import { Cog, User } from 'styled-icons/fa-solid'
import { Exit } from 'styled-icons/ionicons-solid'
import { RootState } from '../..'
import { filterByUserCount, reverseData } from '../../assets/features/Servers'
import { setTabTitle } from '../../assets/features/SidebarTabs'
import { logout } from '../../assets/features/User'
import { SidebarContainer, SidebarItem } from './styles'

type Props = {}

const Sidebar = (props: Props) => {

  const user = useSelector((state:RootState) => state.user)
  const theme = useSelector((state:RootState) => state.theme)
  const dispatch = useDispatch()
  return (
    <SidebarContainer
    isDark={theme.isDark}
    >

     <div style={{
       position:"sticky",
       top:10,
     }}>
       <SidebarItem 
       active isDark={theme.isDark}
       onClick={() => {
        dispatch(setTabTitle("Home"))
        dispatch(reverseData())
      }}
       >
     <Discord/>
     </SidebarItem>
     <SidebarItem  
      onClick={() => {
        dispatch(setTabTitle("Top Server By Users"))
        dispatch(filterByUserCount())
      }}

     svgSize={"20"} isDark={theme.isDark}>
     <User/>
     </SidebarItem>
     {
       user.isLoggedIn && <SidebarItem 
       svgColor="#3ba55d" svgSize={"40"} isDark={theme.isDark}>
       <Plus/>
       </SidebarItem>
     }
     {
        user.isLoggedIn && 
        <SidebarItem svgColor="#3ba55d"
        svgSize={"20"} isDark={theme.isDark}>
        <Cog/>
        </SidebarItem>
     }
     {
        user.isLoggedIn && 
        <SidebarItem svgColor="#ed4245"
        svgSize={"20"} isDark={theme.isDark}
        onClick={
          () => {
            dispatch(logout())
          }
        }
        >
        <Exit/>
        </SidebarItem>
     }

     </div>

    </SidebarContainer>
  )
}


export default Sidebar