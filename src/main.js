import { setNumeroParaAcertar } from "./modelo";

import { generarNumeroAleatorio } from "./motor";

import { handleCompruebaClick } from "./ui";

const eventos = () => {
  const boton = document.getElementById("comprobar");
boton.addEventListener("click", handleCompruebaClick);
};

const comenzarPartida = () => {
  setNumeroParaAcertar(generarNumeroAleatorio());
  eventos();
};

document.addEventListener("DOMContentLoaded", comenzarPartida);
