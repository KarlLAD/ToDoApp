import {createSlice} from '@reduxjs/toolkit';

// setUser : de mettre à jour setUser
export const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, actions) => {
      return actions.payload;
    },
    resetUser: (state, actions) => {
      return null;
    },
  },
});

//  on le rend disponible

export const {setUser, resetUser} = user.actions;

export default user.reducer;
