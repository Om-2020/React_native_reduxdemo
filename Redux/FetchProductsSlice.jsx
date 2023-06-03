import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch data hai n hamko string ke form mai  milata hai
// phir uske bad ham data ko string ke form mai convert kar dete hai

// ye phi ak tarah ka action hi hai apni bhasa mai

export const fetchProducts = createAsyncThunk("gettingdata", async() => {

    const res = await fetch('https://fakestoreapi.com/products');
    const result = res.json(); 
    return result;
});

export const fetchProductSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        isLoading:false,
        isError:false,
    },
    extraReducers: builder =>{

        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.data = action.payload;

        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        }); 

    },
});

export default fetchProductSlice.reducer;