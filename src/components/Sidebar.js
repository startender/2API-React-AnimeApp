/* eslint-disable react/prop-types */
import React from 'react';

function Sidebar({ topAnime, animeUpdates }) {
  return (
    <div>
      <nav>
        <h3>Top anime</h3>
        {topAnime.map((anime) => (
          <a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">
            { anime.title }
          </a>
        ))}
        <h3>Anime Udpates</h3>
        {animeUpdates.map((anime) => (
          <a href={anime.url} target="_blank" rel="noreferrer" key={anime.mal_id}>
            { anime.title }
          </a>
        ))}

      </nav>
    </div>
  );
}

export default Sidebar;
