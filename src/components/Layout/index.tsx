import React from 'react'
import Navbar from '../Navbar'
import styled from "styled-components"
import Sidebar from '../Sidebar';
import Contents from '../Contents';

type Props = {}

const Layout = (props: Props) => {
  return (
    <Layouts>
    <Navbar/>
    <div style={{
         flex:1,
           display:"flex",
    }}>
         <Sidebar/>
         <Contents/>
    </div>

    </Layouts>
  )
}

const Layouts = styled.div`
     display: flex;
     flex-direction: column;
     min-height: 100vh;
`

export default Layout