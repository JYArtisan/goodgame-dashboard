import {createSlice} from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
     name:"theme",
     initialState:{
          isDark:false,
     },
     reducers:{
          setThemeMode: (state,action) => {
               state.isDark = action.payload;
          }
     }
})


export const {setThemeMode} = ThemeSlice.actions;
export default ThemeSlice.reducer;