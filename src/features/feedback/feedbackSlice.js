import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedbacks",
  initialState: {
    feedbacks: [],
    edit: {
      feedback: {},
      isEdit: false,
    },
  },
  reducers: {
    removeFeedback: (state, action) => {
      return {
        ...state,
        feedbacks: state.feedbacks.filter((item) => item.id !== action.payload),
      };
    },

    addFeedback: (state, action) => {
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
      };
    },

    editFeedback: (state, action) => {
      return {
        ...state,
        edit: {
          feedback: action.payload,
          isEdit: true,
        },
      };
    },

    updateFeedback: (state, action) => {
      return {
        ...state,
        feedbacks: state.feedbacks.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { feedback: {}, isEdit: false },
      };
    },
  },
});

export const { removeFeedback, addFeedback, editFeedback, updateFeedback } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
