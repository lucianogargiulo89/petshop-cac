
const navegacion = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");


abrir.addEventListener('click', toggleDropdown);
window.addEventListener('click', closeDropdown);


function toggleDropdown() {
  navegacion.style.opacity = navegacion.style.opacity === '0' ? '1' : '0';
}


function closeDropdown(event) {
    if (!event.target.matches('#boton') && !event.target.matches('#nav')) {
      navegacion.style.opacity = '0';
    }
}





