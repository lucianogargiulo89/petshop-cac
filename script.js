
const navegacion = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");


abrir.addEventListener('click', toggleDropdown);
window.addEventListener('click', closeDropdown);


function toggleDropdown() {
  navegacion.classList.toggle('visible');
}

function closeDropdown(event) {
    if (!event.target.matches('#boton') && !event.target.matches('#nav')) {
      navegacion.classList.remove('visible');
    }
}


const imgDog = document.querySelector(".seleccion__img--perro");
const urlDog = 'https://dog.ceo/api/breeds/image/random';
const imgCat = document.querySelector(".seleccion__img--gato");
const urlCat = 'https://api.thecatapi.com/v1/images/search';


fetch(urlDog)
  .then(response => response.json())
  .then(data => {
    
    console.log(data.message)

    imgDog.style.backgroundImage = "url(" + data.message + ")";
  });


  fetch(urlCat, {
    'x-api-key': 'live_md09ZrZbdYXuH9dJmeB4zrvhEGyzAgRbBJnRDbWJq4AlHG4FJOZGjaYFJp2t9mpc',
  })
  .then (response => response.json())
  .then(data => {
    
    console.log(data.message)

    imgCat.style.backgroundImage = "url(" + data[0].url + ")";
  });


