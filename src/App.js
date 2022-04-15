/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/extensions
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ThemeProvider from './providers/ThemeProvider';
import Layout from './components/Layout';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');
  const [animeUpdates, SetUpdates] = useState([]);

  // const GetUpdates = async () => {
  // const see = await fetch('https://anime-release.p.rapidapi.com/anime')
  // .then((res) => res.json())
  // .then((res) => console.log(res));
  // SetUpdates(see.anime.slice(0, 5))

  // };
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'anime-release.p.rapidapi.com',
      'X-RapidAPI-Key': '0554f6fad4msh515912c590c99b2p163db2jsnc4842d425a04',
    },
  };

  async function GetUpdates(_options) {
    const response = await fetch('https://anime-release.p.rapidapi.com/anime/', _options);
    if (response.ok) {
      const updates = await response.json();
      // const someUpdates = updates.slice(0, 5);
      // console.log(someUpdates);
      SetUpdates(updates.slice(0, 10));
    }
  }
  useEffect(() => {
    GetUpdates(options);
  }, []);

  // GetUpdates(options);

  const GetTopAnime = async () => {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then((res) => res.json());

    SetTopAnime(temp.top.slice(0, 5));
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then((res) => res.json());

    // console.log(temp.results);

    SetAnimeList(temp.results);
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    // console.log(search);
    FetchAnime(search);
  };

  useEffect(() => {
    GetTopAnime();

    // console.log('Top Anime');
  }, []);

  console.log(topAnime);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <ThemeProvider>
        <Layout>
          <Header />
          <div className="content-wrap">
            <Sidebar topAnime={topAnime} animeUpdates={animeUpdates} />
            <MainContent
              HandleSearch={HandleSearch}
              search={search}
              SetSearch={SetSearch}
              animeList={animeList}
            />
          </div>
        </Layout>
      </ThemeProvider>
    </div>

  // https://api.jikan.moe/v3/top/type/page/subtype
  );
}

export default App;
