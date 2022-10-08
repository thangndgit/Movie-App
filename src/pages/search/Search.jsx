import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultList from "../../components/ResultList/ResultList";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { urlToRequest } from "../../constants/request";
import "./Seach.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [videoId, setVideoId] = useState("no_video");
  const [selecting, setSelecting] = useState(-1);

  // Search movie
  useEffect(() => {
    // Re-check
    if (query.length === 0) return;
    // IIFE fetch
    (async function () {
      try {
        // Get data
        const response = await fetch(
          urlToRequest(`/search/movie?query=${query}&language=en-US&`)
        );
        const data = await response.json();
        // Set data
        setResults(data.results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [query]);

  // Convert response data
  const converter = (data) => {
    // Get videos
    const datas = data.results;
    // If datas is falsy, return no video
    if (!datas) return "no_video";
    // Filter videos
    const trailers = datas.filter((el) => el.type === "Trailer");
    const teasers = datas.filter((el) => el.type === "Teaser");
    // If has trailer, return trailer
    if (trailers.length !== 0) return trailers[0].key;
    // Else if has teaser, return teaser
    if (teasers.length !== 0) return teasers[0].key;
    // Else return no video
    return "no_video";
  };

  // Get selecting movie video id
  useEffect(() => {
    if (selecting === -1) return;
    // IIFE fetch
    (async function () {
      try {
        // Get data
        const response = await fetch(
          urlToRequest(`/movie/${results[selecting].id}/videos?`)
        );
        const data = await response.json();
        // Set data
        setVideoId(converter(data));
      } catch (err) {
        // Log error
        console.log(err);
        // Set no video
        setVideoId("no_video");
      }
    })();
  }, [results, selecting]);

  const searchHandler = (query) => {
    setQuery(query);
  };

  const selectHandler = (id) => {
    setSelecting(id);
  };

  return (
    <div className="app">
      <Navbar />
      <SearchForm onSearch={searchHandler} onSelect={selectHandler} />
      {/* When a movie is selected, open detail */}
      {selecting !== -1 && (
        <div className="search-movie-info">
          <h3>Movie info</h3>
          <MovieDetail movie={results[selecting]} videoId={videoId} />
        </div>
      )}
      {/* When has results, open results */}
      {results.length !== 0 && (
        <ResultList items={results} onSelect={selectHandler} />
      )}
    </div>
  );
};

export default Search;
