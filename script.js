
const navegacion = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// cerrar.addEventListener("click", () => {
//     navegacion.classList.add("visible");
//     console.log("add");
// });

// abrir.addEventListener("click", () => {
//     navegacion.classList.remove("visible");
//     console.log("remove");
// });

abrir.addEventListener("click", () => {
    navegacion.classList.toggle("visible");
});
