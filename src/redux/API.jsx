import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    // baseUrl: "https://192.168.0.109:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query({
      query: () => "/products/categories",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    })
    // loginUser: builder.mutation({
    //   query: ({ ...data }) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // registerUser: builder.mutation({
    //   query: ({ ...data }) => ({
    //     url: "/auth/register",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  // useLoginUserMutation,
  // useRegisterUserMutation,
} = storeApi;
