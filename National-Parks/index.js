'use strict';
// api keys and endpoint URL
let apiKey ='v1W3RdMo80x18hJxWpvja534DphNUwR1OITzBeGI';
let searchURL= 'https://developer.nps.gov/api/v1/parks?';

function getNationalParks(stateName, maxResults){
  let finalURL = searchURL + "parkCode=&stateCode=" + stateName + "&limit=" + maxResults + "&api_key=" + apiKey

let  url = encodeURI(finalURL)
console.log(url)

fetch(finalURL)
.then(response => {
  if (response.ok){
    return response.json();
  }
  else console.log("Error")
})
.then(responseJson => {displayResults(responseJson)})
  .catch(error => alert(`Something went wrong. Try again later.`))
}

function displayResults(responseJson){

  // remove previous results
  $('#results-list').empty();
  // loop through the park list
  for(let i= 0; i < responseJson.data.length; i++){
    //for each candidate array, add a list item to the result, list description and name.
    $('#results-list').append(
      `<li><a href="${responseJson.data[i].url}" target="_blank"><h3>${responseJson.data[i].fullName}</h3></a>
      <p>${responseJson.data[i].description}</p>
      <a href="${responseJson.data[i].directionsUrl}" target="blank">Get Directions</a>
      </li>`
    )};
    $('#result').removeClass('hidden');
};

//Form submit events
function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm=$('#js-searchState').val();
    const maxResults =$('#js-max').val();
    getNationalParks(searchTerm, maxResults);
    $('.state').text(`Search results for ${searchTerm}`);
  });
}

//Call the function
$(watchForm);