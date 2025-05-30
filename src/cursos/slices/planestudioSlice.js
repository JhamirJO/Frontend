
import { createSlice } from "@reduxjs/toolkit";
import { fetchPlanEstudiosActivos } from "../actions/planestudioThunks";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const planEstudiosSlice = createSlice({
    name: "planEstudios",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlanEstudiosActivos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlanEstudiosActivos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPlanEstudiosActivos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default planEstudiosSlice.reducer;
