import {
  Estado,
  partida,
  MAXIMO_INTENTOS
} from "./modelo";

import { muestraMensajeComprobacion } from "./ui";

let mensaje: string = "";

export const gestionarGameOver = (estado: Estado) : void => {
  if (estado === "GAME_OVER_MAXIMO_INTENTOS") {
    const elementoComprobar = document.getElementById("comprobar");
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
    elementoComprobar.disabled = true;
    } else {
      console.error(
      "gestionarGameOver: No se ha encontrado el elemento con id comprobar"
      );
    };
  };
};

export const hasSuperadoElNumeroMaximoDeIntentos = () : boolean => partida.numeroDeIntentos >= MAXIMO_INTENTOS;

export const compruebaEstadoComprobacion = (texto: string, estado: Estado) : void => {
  switch (estado) {
    case "NO_ES_UN_NUMERO":
    mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
    break;
    case "EL_NUMERO_ES_MAYOR":
    mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
    break;
    case "EL_NUMERO_ES_MENOR":
    mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
    break;
    case "ES_EL_NUMERO_SECRETO":
    mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
    break;
    case "GAME_OVER_MAXIMO_INTENTOS":
    mensaje = `🪦 GAME OVER, has superado el número máximo de intentos`;
    break;
    default:
    mensaje = "No se que ha pasado, pero no deberías estar aquí";
    break;
  };
  muestraMensajeComprobacion(mensaje);
};

export const comprobarNumero = (texto: string) : Estado => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    return "NO_ES_UN_NUMERO";
  };

  if (numero === partida.numeroParaAcertar) {
  return "ES_EL_NUMERO_SECRETO";
  };

  if (hasSuperadoElNumeroMaximoDeIntentos()) {
  return "GAME_OVER_MAXIMO_INTENTOS";
  };

  return numero > partida.numeroParaAcertar
  ? "EL_NUMERO_ES_MAYOR"
  : "EL_NUMERO_ES_MENOR";
};
