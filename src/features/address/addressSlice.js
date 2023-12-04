import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address:  {
    latitude: 28.7041,
    longitude: 77.1025,
    city: '',
  },
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;

      localStorage.setItem('address', JSON.stringify(state.address));
    },
  },
});

export const selectAddress = ({ address }) => address;

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
