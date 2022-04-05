import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { categories } from '../../tokens'

const initialState : {activeId: string} = {
	activeId: categories[0].id
}

const activeIdSlice = createSlice({
  name: 'activeId',
  initialState,
  reducers: {
		changeActiveId: (state: {activeId: string}, action: PayloadAction<string>) =>
		{
			state.activeId = action.payload
		}
  }
})

export const {changeActiveId} = activeIdSlice.actions
export default activeIdSlice.reducer