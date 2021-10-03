
function loadJoke() {
  

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let joke = JSON.parse(this.responseText);
    document.getElementById('Joke').innerHTML = joke.value;
  };
  xhttp.open('GET', 'https://api.chucknorris.io/jokes/random', true);
  xhttp.send();
}
