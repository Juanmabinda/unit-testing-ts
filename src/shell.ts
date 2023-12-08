import "./style.css";

import {
  partida,
  Estado
} from "./modelo";

import {
  compruebaEstadoComprobacion,
  comprobarNumero,
  gestionarGameOver
} from "./motor";

import {
  muestraNumeroDeIntentos
} from "./ui";

const iniciarPartida = () : void => {
  muestraNumeroDeIntentos();
  const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);
  partida.numeroParaAcertar = generarNumeroAleatorio();
  const botonComprobar = document.getElementById("comprobar");

  if (botonComprobar) {
    botonComprobar.addEventListener("click", handleCompruebaClick);
  };
};

document.addEventListener("DOMContentLoaded", iniciarPartida);

const handleCompruebaClick = () : void => {
  let texto: string = "";
  const inputElement = document.getElementById("numero");

  if (inputElement && inputElement instanceof HTMLInputElement) {
  texto = inputElement.value;
  };

  const estado: Estado = comprobarNumero(texto);
  compruebaEstadoComprobacion(texto, estado);
  partida.numeroDeIntentos++;
  muestraNumeroDeIntentos();
  gestionarGameOver(estado);
};
