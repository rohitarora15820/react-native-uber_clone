import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destinaion: null,
    travelTimeDistance: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;

        },

        setDestination: (state, action) => {
            state.destinaion = action.payload;
        },

        setTravelTimeDistance: (state, action) => {
            state.travelTimeDistance = action.payload;
        }

    }

});

export const { setOrigin, setDestination, setTravelTimeDistance } = navSlice.actions;

//Selectors
export const selectOrigin = (state) =>
    state.nav.origin;

export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeDistance = (state) => state.nav.travelTimeDistance;

export default navSlice.reducer;