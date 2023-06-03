import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: [],

    },
    reducers: {
        addTodo(state, action) {

            state.data.push(action.payload);

        },
        deleteTodo(state, action) {
            let tempdata = state.data
            let newdata = tempdata.filter((item, index) => {
                return index !== action.payload
            })
            state.data = newdata;
        },
        updateTodo(state, action) {
            let tempdata = state.data
            tempdata.map((item, index) => {
                if (action.payload.index === index) {
                    item.title = action.payload.title
                    item.description = action.payload.description
                }
            })
            state.data = tempdata;
        },

    }

});

export const { addTodo, deleteTodo,updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
/*import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    // 1. name 2. initial value 3. reduce> state and action  
    name: 'todo',

    initialState: {
        data: [],
    },

    reducers: {
        addTodo(state, action) {
            // action.payload 
            // state.data[1,2,3,]

            state.data.push(action.payload);
        },

        deleteTodo(state, action) {
            let tempData = state.data;
            let newData = tempData.filter((item, index) => {
                return index !== action.payload;
            });
            state.data = newData;
        },
    }

});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;*/