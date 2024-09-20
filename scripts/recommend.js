const muBaseUrlForMovie = "https://www.omdbapi.com/?apikey=8c7000d5&t="; // add movie name after the '='

async function getRecommendedMovies() {
  const theNoteBook = await axios.get(`${muBaseUrlForMovie}The Notebook`);
  appendMovieCard(theNoteBook.data);

  const shawshankRedemption = await axios.get(
    `${muBaseUrlForMovie}shawshank redemption`
  );
  appendMovieCard(shawshankRedemption.data);

  const enemy = await axios.get(`${muBaseUrlForMovie}enemy`);
  appendMovieCard(enemy.data);
}

getRecommendedMovies();

function appendMovieCard(movie) {
  const article = document.createElement("article");
  article.classList.add("main__movie-card");

  const figure = document.createElement("figure");
  figure.classList.add("main__movie-card-poster");
  const img = document.createElement("img");
  img.classList.add("movie-poster");
  img.src = movie.Poster;
  img.alt = `${movie.Title} movie image`;
  figure.appendChild(img);

  const h3 = document.createElement("h3");
  h3.classList.add("main__movie-card-title");
  h3.textContent = movie.Title;

  const ul = document.createElement("ul");
  ul.classList.add("main__movie-card-details");

  const liRating = document.createElement("li");
  const rateTitle = document.createElement("p");
  rateTitle.textContent = "Rating";
  const rateText = document.createElement("p");
  rateText.textContent = movie.imdbRating;
  liRating.appendChild(rateTitle);
  liRating.appendChild(rateText);

  const liLand = document.createElement("li");
  const landTitle = document.createElement("p");
  landTitle.textContent = "Land";
  const landText = document.createElement("p");
  landText.textContent = movie.Language;
  liLand.appendChild(landTitle);
  liLand.appendChild(landText);

  const liReview = document.createElement("li");
  const reviewTitle = document.createElement("p");
  reviewTitle.textContent = "Year";
  const reviewText = document.createElement("p");
  reviewText.textContent = movie.Year;
  liReview.appendChild(reviewTitle);
  liReview.appendChild(reviewText);

  ul.appendChild(liRating);
  ul.appendChild(liLand);
  ul.appendChild(liReview);

  article.appendChild(figure);
  article.appendChild(h3);
  article.appendChild(ul);

  const moviesContainer = document.querySelector(".main__movies-container");
  moviesContainer.appendChild(article);
}

const currentPath = document.location.pathname;

switch (currentPath) {
  case "/":
    document.querySelector(".recommend").classList.add("active");
    break;
  default:
    break;
}
