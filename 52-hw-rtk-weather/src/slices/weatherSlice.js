const { createSlice } = require("@reduxjs/toolkit");

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        putWeatherInfo(state, action){
            return action.payload
        }
    }
    
})

export const {putWeatherInfo} = weatherSlice.actions;
export default weatherSlice.reducer;