const countMovie = (arr, element) => {
  element.innerHTML = `Movies(${arr.length})`;
  return element.innerHTML;
};

export default countMovie;
