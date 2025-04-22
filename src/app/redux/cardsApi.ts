import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../interfaces/interface";

export const cardsApi = createApi({
    reducerPath:'cardsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query<ICard[], number>({
            query: (limit:number) => `posts?limit=${limit}`
        }),
        getCurrentPost: build.query<ICard, number>({
            query: (id:number) => `posts/${id}`
        }),
    })
})

export const {useGetPostsQuery, useGetCurrentPostQuery} = cardsApi