import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';

  import type { RootState } from '../store' ;
  
  // declaring the types for our state
  export type LuckyState = {
    
    lucky1: string;
    lucky2: string;
    lucky3: string;
    
  
  };
  
  const initialState: LuckyState = {
    
    lucky1: "",
    lucky2: "",
    lucky3: "",
    
   
  };
  
  export const luckySlice = createSlice({
    name: 'luckynumber',
    initialState,
  // The `reducers` field lets us define reducers and generate associated actions. 
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app. 
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
      
      setLuckyNumbers: (state, action: PayloadAction<Object>) => {
        
        state.lucky1 = action.payload['lucky1'];
        state.lucky2 = action.payload['lucky2'];
        state.lucky3 = action.payload['lucky3'];
        
      },

    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    setLuckyNumbers
  } = luckySlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default luckySlice.reducer;