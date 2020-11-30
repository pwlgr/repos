import queryString from 'query-string';

const API_URL = 'https://api.github.com/search/repositories';

const apiConfig = {
  fetchRepos: async (query) => {
    const url = queryString.stringifyUrl({ url: API_URL, query });

    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
};

export default apiConfig;
