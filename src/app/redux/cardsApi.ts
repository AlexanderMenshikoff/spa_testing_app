import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../interfaces/interface";

export const cardsApi = createApi({
    reducerPath:'cardsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query<ICard[], number>({
            query: (limit) => `posts?limit=${limit}`
        })
    })
})

export const {useGetPostsQuery} = cardsApi