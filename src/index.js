import './style.css';
import { showMovies, fetchMovies } from './module/fetchMovies.js';
import countMovie from './module/countMovies.js';

const movieList = document.getElementById('movie-list');
showMovies(movieList, fetchMovies);

const movieCount = document.getElementById('movie-counter');
fetchMovies().then((data) => {
  countMovie(data, movieCount);
});

const startIndex = document.getElementById('indexStart');
const endIndex = document.getElementById('indexEnd');
const showBtn = document.getElementById('showMovies');
const errorMsg = document.getElementById('error');

showBtn.onclick = () => {
  const start = startIndex.value;
  const end = endIndex.value;
  if (start !== '' && end !== '') {
    if (+start >= +end) {
      errorMsg.innerHTML = 'Invalid input';
    }
    showMovies(movieList, () => fetchMovies(start, end));
    fetchMovies(start, end).then((data) => {
      countMovie(data, movieCount);
    });
  }
};

startIndex.onfocus = () => {
  errorMsg.innerHTML = '';
};

endIndex.onfocus = () => {
  errorMsg.innerHTML = '';
};
