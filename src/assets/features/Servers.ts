import {createSlice,createAsyncThunk, ThunkAction, Action} from "@reduxjs/toolkit";
import axios from "axios";
import { ICard } from "../../components/Card";
     

export const fetchAll = createAsyncThunk("servers/fetchServers",
     async (arg, thunkAPI) => {
          try{
               const response = await axios.get("http://localhost:3005");
          return response.data;
          }
          catch(err){
               return thunkAPI.rejectWithValue(err);
          }
     }
);

const ServersReducer = createSlice({
     name: "servers",
     initialState: {
          servers: [],
          loading: false,
          error: false,
     },
     reducers:{
          reverseData: (state) => {
               //filter by servers users count
               state.servers = state.servers.sort((a: ICard,b : ICard) => {
                    return a.memberCount - b.memberCount;
               }
               )
          },
          filterByUserCount: (state) => {
               //filter by servers users count
               state.servers = state.servers.sort((a: ICard,b : ICard) => {
                    return b.memberCount - a.memberCount;
               }
               )
          }
     },
     extraReducers: (builder) => {
          builder.addCase(fetchAll.pending, (state, action) => {
               state.loading = true;
          });
          builder.addCase(fetchAll.fulfilled, (state, action) => {
               state.servers = action.payload.reverse();
               state.loading = false;
          });
          builder.addCase(fetchAll.rejected, (state, action) => {
               state.error = false;
               state.loading = false;
          });
     }

});


export const {filterByUserCount,reverseData} = ServersReducer.actions;
export const  {actions, reducer} = ServersReducer;