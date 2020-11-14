const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


alert(urlParams.get('searchText'));