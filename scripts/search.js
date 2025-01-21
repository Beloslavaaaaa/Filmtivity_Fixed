document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search-btn").addEventListener("click", function () {
    let title = document.getElementById("search").value.trim();
    if (title) {
      fetchMovie(title);
      document.getElementById("details-page").style.display = "block";
    } else {
      alert("test");
      document.getElementById("details-page").style.display = "none";
    }
  });
});
const api_key = '2663a47da530c754207396eef5db5fb1';
function fetchMovie(title) {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&amp;query=${title}`
  )
    .then((response) => response.json())
    .then((data) => {
        const dataResult = data.results[0];
      document.getElementById("title").textContent = dataResult.title;
      document.getElementById("release_date").textContent =
      dataResult.release_date;
      document.getElementById("overview").textContent =
      dataResult.overview;
      document.getElementById("vote_average").textContent =
      dataResult.vote_average;
      document.getElementById("original_language").textContent =
      dataResult.original_language;
      document.getElementById("poster").src =
        "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
    })
    .catch((error) => console.error(error));
}
