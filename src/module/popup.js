
const popUp = document.querySelector('.popUpContent');
const popContentLoad = document.querySelector('.popContentLoad');
// const form = document.querySelector('.newComment');
let noOfComments = 0;
const background = document.querySelector('#popup-window');

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const openPopup = (id) => {
  popUp.classList.remove('hide');
  popUp.classList.add('show');
  background.classList.remove('hide');
  const geturl = `https://api.tvmaze.com/shows/${id}`;
  fetchData(geturl).then((res) => {
    const movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-title');
    movieTitle.innerHTML = res.name;
    const movieImage = document.createElement('img');
    movieImage.classList.add('movieImage');
    movieImage.src = res.image.original;
    const movieDescription = document.createElement('p');
    movieDescription.innerHTML = res.summary;
    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');
    const movieGenres = document.createElement('p');
    movieGenres.innerHTML = `Genres: ${res.genres}`;
    const movieRating = document.createElement('p');
    movieRating.innerHTML = `Rating: ${res.rating.average}`;
    const movieRuntime = document.createElement('p');
    movieRuntime.innerHTML = `Runtime: ${res.runtime}`;
    const movieLanguage = document.createElement('p');
    movieLanguage.innerHTML = `Language: ${res.language}`;
    const premiere = document.createElement('p');
    premiere.innerHTML = `Premiere start on: ${res.premiered}`;
    const movieStatus = document.createElement('p');
    movieStatus.innerHTML = `Status: ${res.status}`;
    const movieURL = document.createElement('a');
    movieURL.className = 'movieURL';
    movieURL.href = res.url;
    movieURL.innerHTML = 'Click here to see more details';
    movieDetails.appendChild(movieGenres);
    movieDetails.appendChild(movieRating);
    movieDetails.appendChild(movieRuntime);
    movieDetails.appendChild(movieLanguage);
    movieDetails.appendChild(premiere);
    movieDetails.appendChild(movieStatus);
    popContentLoad.appendChild(movieTitle);
    popContentLoad.appendChild(movieImage);
    popContentLoad.appendChild(movieDescription);
    popContentLoad.appendChild(movieDetails);
    popContentLoad.appendChild(movieURL);
  });
};

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  popUp.classList.remove('show');
  popUp.classList.add('hide');
  background.classList.add('hide');
  popContentLoad.innerHTML = '';
});

export default openPopup;