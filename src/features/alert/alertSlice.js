import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {openAlert:false,currentCountry:""}
}

export const alertSlice = createSlice({
  name: 'showCountryDetails',
  initialState,
  reducers: {
    setAlertStatus: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = {
                        openAlert:!(state.value.openAlert),
                        currentCountry:action.payload
                    }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAlertStatus } = alertSlice.actions

export default alertSlice.reducer