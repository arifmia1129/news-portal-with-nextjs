const { default: api } = require("../api/apiSlice");

const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllNews: build.query({
      query: () => "news",
    }),
    getNewsById: build.query({
      query: (id) => `news/${id}`,
    }),
  }),
});

export const { useGetAllNewsQuery, useGetNewsByIdQuery } = newsApi;
