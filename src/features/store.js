import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedback/feedbackSlice";

const store = configureStore({
  reducer: {
    feedbacks: feedbackReducer,
  },
});

export default store;
