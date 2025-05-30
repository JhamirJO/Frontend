
import { createSlice } from "@reduxjs/toolkit";
import { fetchDepartamento } from "../actions/departamentoThunks";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const departamentoSlice = createSlice({
    name: "departamento",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartamento.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDepartamento.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDepartamento.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default departamentoSlice.reducer;
