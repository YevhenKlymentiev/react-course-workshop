import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import ASYNC_STATUS from 'constants/async-status';

const initialState = {
  status: ASYNC_STATUS.idle,
  error: null,
  list: [
    { title: 'Initial Card',
      id: 0
    }
  ]
}

export const addCardAsync = createAsyncThunk(
  'profile/addCard',
  async ({ card }, { rejectWithValue, extra: client }) => {
    try {
      const result = await client(card);

      if (!result) { // Some Condition
        return rejectWithValue('Some Error');
      }

      return { card: result };
    } catch (err) {
      return rejectWithValue(err.toString());
    }
  }
);

export const updateCardAsync = createAsyncThunk(
  'profile/updateCard',
  async ({ card }, { rejectWithValue, extra: client }) => {
    try {
      const result = await client(card);

      return { card: result };
    } catch (err) {
      return rejectWithValue(err.toString());
    }
  }
);

export const deleteCardAsync = createAsyncThunk(
  'profile/deleteCard',
  async ({ cardId }, { rejectWithValue, extra: client }) => {
    try {
      const result = await client(cardId);

      return { cardId: result };
    } catch (err) {
      return rejectWithValue(err.toString());
    }
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [addCardAsync.pending]: (state) => {
      state.status = ASYNC_STATUS.loading
    },
    [addCardAsync.fulfilled]: (state, action) => {
      const { card } = action.payload;

      state.list.push(card);
      state.status = ASYNC_STATUS.idle;
    },
    [addCardAsync.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = ASYNC_STATUS.idle;
    },

    [updateCardAsync.pending]: (state) => {
      state.status = ASYNC_STATUS.loading
    },
    [updateCardAsync.fulfilled]: (state, action) => {
      const { card } = action.payload;
      const updatedCardIndex = state.list.findIndex(curr => curr.id === card.id);

      state.list[updatedCardIndex] = card;
      state.status = ASYNC_STATUS.idle;
    },
    [updateCardAsync.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = ASYNC_STATUS.idle;
    },

    [deleteCardAsync.pending]: (state) => {
      state.status = ASYNC_STATUS.loading
    },
    [deleteCardAsync.fulfilled]: (state, action) => {
      const { cardId } = action.payload;

      state.list = state.list.filter(curr => curr.id !== cardId);
      state.status = ASYNC_STATUS.idle;
    },
    [deleteCardAsync.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = ASYNC_STATUS.idle;
    }
  }
});

export default cardsSlice.reducer;
