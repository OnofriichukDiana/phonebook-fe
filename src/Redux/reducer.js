import { createReducer, createSlice } from "@reduxjs/toolkit";
import { changeFilter, updateAvatar } from "../Redux/actions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { registration, logIn, logOut, currentUser } from "../Redux/actions";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://phonebook-be.onrender.com/api/",

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: ({ page, filter }) => `contacts?page=${page}&name=${filter}`,
      providesTags: (result = []) =>
        result
          ? [
              ...result.contacts.map(({ id }) => ({ type: "Contacts", id })),
              { type: "Contacts", id: "LIST" },
            ]
          : [{ type: "Contacts", id: "LIST" }],
    }),
    addContact: builder.mutation({
      query: (data) => {
        return {
          url: "/contacts",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    deleteContact: builder.mutation({
      query: (id) => {
        return {
          url: `/contacts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    editContact: builder.mutation({
      query: ({ id, name, number }) => {
        return {
          url: `contacts/${id}`,
          method: "PUT",
          body: { name, number },
        };
      },
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    updateFavorite: builder.mutation({
      query: ({ id, favorite }) => {
        return {
          url: `contacts/${id}/favorite`,
          method: "PATCH",
          body: { favorite },
        };
      },
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
  useUpdateFavoriteMutation,
} = contactsApi;

export const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [currentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [currentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatarURL = `https://phonebook-be.onrender.com/${action.payload.avatarURL}`;
    },
  },
});
