import { API_HOST, API_KEY, IMG_SRC } from "./api";

const REQUESTS = {
  fetchTrending: `${API_HOST}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${API_HOST}/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `${API_HOST}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `${API_HOST}/search/movie?api_key=${API_KEY}&language=en-US`,
};

const urlToRequest = (url) => `${API_HOST}${url}api_key=${API_KEY}`;
const imgToRequest = (url, size) => IMG_SRC + size + url;

export default REQUESTS;
export { urlToRequest, imgToRequest };
