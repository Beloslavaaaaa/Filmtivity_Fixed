document.addEventListener('DOMContentLoaded', function(){
document.getElementById('search-btn').addEventListener('click',function(){
    var title = document.getElementById('search').value;
    if(title.trim()){
        fetch.fetchMovie();
        document.getElementById('details-page').style.display = 'block';
    }else {
        document.getElementById('details-page').style.display = 'none';
    }
});
});
function fetchMovie(title) {
 fetch(`https://api.themoviedb.org/3/search/movie?api_key={2663a47da530c754207396eef5db5fb1}&amp;query=${title}`)
 .then(response => response.json())
 .then(data => {
    document.getElementById('title').textContent = data.results[0].title;
    document.getElementById('release_date').textContent = data.results[0].release_date;
    document.getElementById('overview').textContent = data.results[0].overview;
    document.getElementById('vote_average').textContent = data.results[0].vote_average;
    document.getElementById('original_language').textContent = data.results[0].original_language;
    document.getElementById('poster').textContent = data.results[0].poster;
 })
 .catch(error => console.error(error));
}