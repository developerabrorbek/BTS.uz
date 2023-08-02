import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://fakestoreapi.com",
    baseUrl: "https://rjavadev.jprq.live/api/v1/",
    // baseUrl: "https://192.168.0.109:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product/get/all",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product/get/${id}`,
    }),
    getCategories: builder.query({
      query: () => "/category/get/all",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/product/get/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = storeApi;
