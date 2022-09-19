const getApiResBtn = document.getElementById('getApiResBtn'),
      title = document.getElementById('api_title'),
      year = document.getElementById('api_year'),
      director = document.getElementById('api_director');

getApiResBtn.addEventListener('click', getFilms);

const apiUrl = `http://www.omdbapi.com/?apikey=8a72e903&t=`;

function getFilms(){
    const getApiInput = document.getElementById('getApiInput').value;
    const url = apiUrl + getApiInput;
    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data=> {
        title.innerHTML = data.Title;
        year.innerHTML = data.Year;
        director.innerHTML = data.Director;
    });
}