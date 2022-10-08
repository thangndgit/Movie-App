import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/MovieList/MovieList";
import request from "../../constants/request";

function Browse() {
  const [selecting, setSelecting] = useState(-1);

  const selectingHandler = (id) => {
    setSelecting(id);
  };

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <MovieList
        title=""
        url={request.fetchNetflixOriginals}
        direction="vertical"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="0"
      />
      <MovieList
        title="Xu hướng"
        url={request.fetchTrending}
        direction="horizontal"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="1"
      />
      <MovieList
        title="Xếp hạng cao"
        url={request.fetchTopRated}
        direction="horizontal"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="2"
      />
      <MovieList
        title="Hành động"
        url={request.fetchActionMovies}
        direction="horizontal"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="3"
      />
      <MovieList
        title="Hài"
        url={request.fetchComedyMovies}
        direction="horizontal"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="4"
      />
      <MovieList
        title="Kinh dị"
        url={request.fetchHorrorMovies}
        direction="horizontal"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="5"
      />
      <MovieList
        title="Lãng mạn"
        url={request.fetchRomanceMovies}
        direction="horizontal"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="6"
      />
      <MovieList
        title="Tài liệu"
        url={request.fetchDocumentaries}
        direction="horizontal"
        onSelecting={selectingHandler}
        selecting={selecting}
        id="7"
      />
    </div>
  );
}

export default Browse;
