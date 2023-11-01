import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRandomGreeting = createAsyncThunk(
    'greetings/index',
    async () => {
        const res = await fetch('/api/v1/index');
        const data = await res.json();
        return data.greeting;
    },
);



const initialState = {
    message: '',
};

const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    extraReducers(builder) {
        builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
            state.message = action.payload;
        });
    },
});

export default greetingsSlice.reducer;
