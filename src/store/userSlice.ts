import{ createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";
import type { User } from "./types";



const userInfo:User={
    name:"Roshan",
    age:22
}

const userSlice=createSlice({
    name:"user",  //room/slice ko naam
    initialState:userInfo,
    reducers:{   //initial state ko value change garna reducer chahinxa
        setName(state:User,action:PayloadAction<User>){
            state.name="hahahehehuhu"

        },
        setAge(state:User,action:PayloadAction<User>){
            state.age=21

        }


    }
})

//actions

export const {setName,setAge}=userSlice.actions

export default userSlice.reducer