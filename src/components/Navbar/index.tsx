import React from 'react'
import { Nav } from '../../styles/GlobalStyle'
import {SiteLogo,Title,SubTitle, SearchBar} from "./styles"
import {Search} from "styled-icons/boxicons-regular"
import { QuestionCircleFill } from 'styled-icons/bootstrap'
import ToggleButton from '../ToggleButton'

import {RootStateOrAny, useSelector,useDispatch} from 'react-redux'
import { RootState } from '../..'
import { setUser } from '../../assets/features/User'

type Props = {}

const Navbar = (props: Props) => {
  const user = useSelector((state:RootState) => state.user)
  const theme = useSelector((state:RootState) => state.theme)
  const dispatch = useDispatch();
  return (
    <Nav className="navbar navbar-expand-md navbar-dark" isDark={theme.isDark}>
  <div className="container-fluid">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul className="navbar-nav me-auto">
          <SiteLogo  isDark={theme.isDark}>
            <Title>GG</Title>
            <SubTitle>Good Game dude !</SubTitle>
          </SiteLogo>
      </ul>
    </div>
    <div className="mx-auto order-0">
      <SearchBar
      isDark={theme.isDark}
      >
        <Search/>
        <input type="text" placeholder="Search"/>
      </SearchBar>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ms-auto align-items-center">
      {
        !user.isLoggedIn && <li className="nav-item">
        <span 
        onClick={() => dispatch(setUser({isLoggedIn:true,
        user:{
          id:1,
          name:"Giyuushi",
          discriminator: "0000",
          avatar:"https://c.tenor.com/PfNCQZXPo3sAAAAC/giyu-kimetsu-no-yaiba.gif"
        }
        }))}
        style={{cursor:"pointer",color:"white"}}>login</span>
       </li>
      }
      {
        !user.isLoggedIn && 
        <li className="nav-item">
         <a  className="nav-link text-white">register</a>
        </li>
      }
      {
        user.isLoggedIn &&
        <li className="nav-item">
          <span style={{cursor:"pointer",color:"white",marginRight:10}}><b>Welcome, </b>{user.user.name}#{user.user.discriminator}</span>
          <img src={user.user.avatar} alt="avatar" className="rounded-circle" style={{width:"40px",height:"40px"}}/>
        </li>
      }
        {
          !user.isLoggedIn && <li className="nav-item">
          <QuestionCircleFill
          style={{
            color: '#fff',
            width: '25px',
          }}
          />
        </li>
        }
        <li className="nav-item ">
          <ToggleButton />
        </li>
      </ul>
    </div>
  </div>
</Nav>
  )
}

export default Navbar