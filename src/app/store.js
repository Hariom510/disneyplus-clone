import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from "..//features/user/userSlice";
import movieReducer from "..//features/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducers,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),

});

