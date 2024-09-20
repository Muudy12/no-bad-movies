const BaseUrlForMovie =
  "https://www.omdbapi.com/?i=tt3896198&apikey=3065cf85&t="; // add movie name after the '='

async function getMovie() {
  const searchValue = document.querySelector(".search").value;
  const movieResult = await axios.get(`${BaseUrlForMovie}${searchValue}`);
  return movieResult;
}

let form = document.getElementsByClassName("form")[0];

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const movie = await getMovie();
  appendMovieCard(movie);
});

getMovie();

function appendMovieCard(movie) {
  const mainMovieCard = document.querySelector(".main__movie-card");
  mainMovieCard.innerHTML = "";
  const figure = document.createElement("figure");
  figure.classList.add("main__movie-card-poster");
  const moviePoster = document.createElement("img");
  moviePoster.classList.add("movie-poster");
  figure.append(moviePoster);
  mainMovieCard.append(figure);
  const footer = document.createElement("div");
  footer.classList.add("main__movie-card-details");
  const movieTitle = document.createElement("p");
  const imDbRating = document.createElement("p");
  footer.append(movieTitle);
  footer.append(imDbRating);
  mainMovieCard.append(footer);
  moviePoster.src = movie.data.Poster;
  movieTitle.innerText = movie.data.Title;
  imDbRating.innerText = movie.data.imdbRating;
  if (movie.data.imdbRating < 5) {
    const badMovie = document.querySelector(".main__recommend-title");
    badMovie.innerHTML = "Your movie is BAD";
    badMovie.style.color = "red";
  } else {
    const badMovie = document.querySelector(".main__recommend-title");
    badMovie.innerHTML = "Your movie is GOOD :)";
    badMovie.style.color = "green";
  }
}

let currentPath = document.location.pathname.split("/").filter(p => p !== '');
currentPath = currentPath[currentPath.length - 1];

switch (currentPath) {
  case "search.html":
    document.querySelector(".search-page").classList.add("active");
    break;
  default:
    break;
}
