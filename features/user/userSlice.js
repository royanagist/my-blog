import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  filteredUsers: [],
  page: 1,
  isLoading: false,
};

export const getUsers = createAsyncThunk('users/getUsers', async (page) => {
  const headers = {
    Authorization:
      'Bearer aa1009acd96fe583b46a15e04a2652f5ceae2b017e43b2a4b9f91f1dd565a315',
  };
  try {
    const { data } = await axios.get(
      `https://gorest.co.in/public/v2/users?page=${page}`,
      { headers }
    );
    return data;
  } catch (error) {
    return error;
  }
});

export const removeUser = createAsyncThunk('users/removeUser', async (id) => {
  const headers = {
    Authorization:
      'Bearer aa1009acd96fe583b46a15e04a2652f5ceae2b017e43b2a4b9f91f1dd565a315',
  };
  try {
    const { data } = await axios.delete(
      `https://gorest.co.in/public/v2/users/${id}`,
      { headers }
    );

    return data;
  } catch (error) {
    return error;
  }
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (params) => {
    const { id, name, email, gender, status } = params;
    const headers = {
      Authorization:
        'Bearer aa1009acd96fe583b46a15e04a2652f5ceae2b017e43b2a4b9f91f1dd565a315',
    };
    try {
      const { data } = await axios.patch(
        `https://gorest.co.in/public/v2/users/${id}`,
        { name: name, email: email, gender: gender, status: status },
        { headers }
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (newUser) => {
    const headers = {
      Authorization:
        'Bearer aa1009acd96fe583b46a15e04a2652f5ceae2b017e43b2a4b9f91f1dd565a315',
    };
    try {
      const { data } = await axios.post(
        `https://gorest.co.in/public/v2/users/`,
        newUser,
        {
          headers,
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const searchUser = createAsyncThunk(
  'users/searchUser',
  async (param) => {
    const headers = {
      Authorization:
        'Bearer aa1009acd96fe583b46a15e04a2652f5ceae2b017e43b2a4b9f91f1dd565a315',
    };
    try {
      const { data } = await axios.get(
        `https://gorest.co.in/public/v2/users?name=${param}`,
        { headers }
      );

      return data;
    } catch (error) {
      return error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })

      .addCase(removeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(removeUser.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })

      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })

      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })

      .addCase(searchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredUsers = action.payload;
      })
      .addCase(searchUser.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { setPage, setIsloading } = userSlice.actions;
export default userSlice.reducer;
