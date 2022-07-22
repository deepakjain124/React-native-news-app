import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Wholedata: [],
}

export const newsSlice = createSlice({
  name: 'News',
  initialState,
  reducers: {
    setdata: (state,action) => {
      state.Wholedata=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setdata} = newsSlice.actions


//selectors

export const selectdata=(state)=>state.news.Wholedata
// export const selectdestination=(state)=>state.nav.destination
// export const selecttraveltimeinfo=(state)=>state.nav.traveltimeinfo

export default newsSlice.reducer