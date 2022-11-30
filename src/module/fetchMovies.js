const url = 'https://api.tvmaze.com/shows';
// const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes/`;

export const fetchMovies = async (start = 0, end = 12) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (+start < +end) {
      const newData = data.slice(start, end);
      return newData;
    }
    if (+start >= +end) {
      const newData = data.slice(0, 12);
      return newData;
    }
    return '';
  } catch (e) {
    return e.message;
  }
};

export const showMovies = (movieList, fetchMovies) => {
  movieList.replaceChildren();
  fetchMovies().then((res) => {
    res.map((movie) => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.id = movie.id;

      const movieImage = document.createElement('img');
      movieImage.className = 'movie-img';
      movieImage.src = movie.image.medium;
      movieCard.appendChild(movieImage);

      const movieDescription = document.createElement('div');
      movieDescription.className = 'movie-description';

      const nameIcon = document.createElement('div');
      nameIcon.className = 'name-icon';
      const movieName = document.createElement('h3');

      movieName.innerHTML = movie.name;
      nameIcon.appendChild(movieName);

      const icon = document.createElement('div');
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>`;
      nameIcon.appendChild(icon);
      movieDescription.appendChild(nameIcon);

      const genreLang = document.createElement('div');
      genreLang.className = 'genre-lang';
      const genre = document.createElement('p');
      const list = movie.genres.toString();
      genre.innerHTML = `Genre: ${list}`;
      genreLang.appendChild(genre);
      const lang = document.createElement('p');
      lang.innerHTML = `Language: ${movie.language}`;
      genreLang.appendChild(lang);
      movieDescription.appendChild(genreLang);
      movieCard.appendChild(movieDescription);
      const commentBtn = document.createElement('button');
      commentBtn.className = 'commentBtn';

      commentBtn.innerHTML = 'Comments';
      movieCard.appendChild(commentBtn);
      movieList.appendChild(movieCard);
      return '';
    });
  });
};
