import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const bookData = createAsyncThunk(
  "book/bookData",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3009/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//insert book
export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (databook, thunkAPI) => {
    const { rejectWithValue, getState} = thunkAPI;
    try {
      databook.userName = getState().auth.name;

      const res = await fetch("http://localhost:3009/books", {
        method: "POST",
        body: JSON.stringify(databook),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete thunk 
export const deleteBook = createAsyncThunk('book/deleteBook', async(id, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  
  try{
    await fetch(`http://localhost:3009/books/${id}`, {
      method: 'DELETE',
    });
    
    return id
  }catch (error) {
    rejectWithValue(error.message)
  }
})

//GET BOOK
export const getBook = createAsyncThunk("book/getBook", async (book, thunkAPI) => {
  console.log(book)
  const { rejectWithValue } = thunkAPI;

  try {
    await fetch(`http://localhost:3009/books/${book.id}`, {
      method: "GET",
    });

    return book;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null, bookInfos : [] },
  reducers: {},

  extraReducers: (builder) => {
    // GET BOOKS
    builder.addCase(bookData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(bookData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(bookData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // INSERT BOOK
    builder.addCase(insertBook.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.books.push(action.payload);
      }),
      builder.addCase(insertBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

      // DELETE BOOK
      builder.addCase(deleteBook.pending, (state) => {
        state.isLoading = true
      });
      builder.addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.books = state.books.filter(book => book.id !== action.payload)
      });
      builder.addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      });

      builder.addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookInfos = action.payload;
      });
  },
});

export default bookSlice.reducer;
export const bookActions = bookSlice.actions;
