import {createSlice} from "@reduxjs/toolkit"


const SidebarTabs = createSlice({
     name: "SidebarTabs",
     initialState: {
          activeTabIndex: 0,
          tabTitle: "Home",
     },
     reducers: {
          setActiveTabIndex: (state, action) => {
               state.activeTabIndex = action.payload
          },
          setTabTitle: (state, action) => {
               state.tabTitle = action.payload
          }
     }
})

export const {setActiveTabIndex, setTabTitle} = SidebarTabs.actions
export const {actions, reducer} = SidebarTabs