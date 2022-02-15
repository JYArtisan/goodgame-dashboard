import {createSlice} from "@reduxjs/toolkit";

const UserSlice = createSlice({
     name:"user",
     initialState:{
          isLoggedIn:false,
          user:{
               id:null,
               name:"",
               discriminator:"",
               avatar:"",
          }
     },
     reducers:{
           setUser: (state, action) => {
                    state.isLoggedIn = action.payload;
                    state.user = action.payload.user ? action.payload.user : {};
               },
           logout: (state) => {
                    state.isLoggedIn = false;
                    state.user = {
                         id:null,
                         name:"",
                         discriminator:"",
                         avatar:"",
                    };
               }
          },
});

export const {setUser,logout}  = UserSlice.actions;
export default UserSlice.reducer;