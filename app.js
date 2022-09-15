const GET_API_RES_BTN = document.getElementById('getApiResBtn');
const CURRENT_LATITUDE = document.getElementById('api_latitude');
const CURRENT_LONGITUDE = document.getElementById('api_longitude');

GET_API_RES_BTN.addEventListener('click', getAPI);

let endPoint = 'http://api.open-notify.org/iss-now.json';

function getAPI(){
    fetch(endPoint, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data=> {
        CURRENT_LONGITUDE.innerHTML=data.iss_position.longitude;
        CURRENT_LATITUDE.innerHTML=data.iss_position.latitude;
    });
}
