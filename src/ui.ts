import {
partida,
MAXIMO_INTENTOS
} from "./modelo";

export const muestraNumeroDeIntentos = () => {
  const elementoIntentos = document.getElementById("intentos");
  if (elementoIntentos) {
    elementoIntentos.innerHTML = `${partida.numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
  } else {
    console.error(
      "muestraNumeroDeIntento: No se ha encontrado el elemento con id intentos"
    );
  };
};

export const muestraMensajeComprobacion = (mensaje: string) => {
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
  elementoResultado.innerHTML = mensaje;
  };
};
