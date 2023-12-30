import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface basketState {
    value: number
  }
  
  // Define the initial state using that type
  const initialState: basketState = {
    value: 0
  }

  
  export const basketSlice = createSlice({
    name: 'basket',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      }
      
    }
  })

