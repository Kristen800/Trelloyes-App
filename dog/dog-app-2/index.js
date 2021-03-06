function getDogImages() {
    console.log('Fetching your dog images');
    let quantity = getQuantity();
     fetch (`https://dog.ceo/api/breeds/image/random/${quantity}`)
     .then(response => response.json())
     .then(responseJson => displayResults(responseJson))
     .catch(error => alert('Something went wrong.Try again later.'))
  }
  
  function getQuantity() {
    let enteredNum = $('#dog-quantity').val();
    return enteredNum;
  }
  
  // displaysResults to the DOM
  function displayResults(responseJson) {
    console.log(responseJson);
    let index = getQuantity();
    let dogHtml = "";
    for (let i=0; i < index; i++) {
      dogHtml+=`<br><img src="${responseJson.message[i]}" class="results-img">`;
    }
    $('section h2').replaceWith(`<h2>You got ${getQuantity()} dogs!</h2>`);
    $('div.response-images').html(dogHtml);
    $('.results').removeClass('hidden');
  }
  
  // submit form listener
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImages();
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });