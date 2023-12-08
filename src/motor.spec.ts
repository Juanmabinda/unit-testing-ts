import { vi, beforeEach } from "vitest";
import { comprobarNumero } from "./motor";
import * as modelo from "./modelo"

describe("comprobarNumero", () => {
  beforeEach(() => {
    vi.spyOn(modelo.partida, "numeroParaAcertar", "get").mockReturnValue(25);
  });

  it("Debería devolver NO_ES_NUMERO si el nro no es un número", () => {
    // Arrange
    const texto: string = "esto no es un numero";
    const resultadoEsperado : modelo.Estado = "NO_ES_UN_NUMERO";

    // Act
    const resultado : modelo.Estado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });


  it("Debería devolver ES_EL_NUMERO_SECRETO si el numero es coincidente", () => {
    // Arrange
    const texto : string = "25";
    const resultadoEsperado : modelo.Estado = "ES_EL_NUMERO_SECRETO";

    // Act
    const resultado : string = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(resultadoEsperado)
  });

  it("Debería devolver EL_NUMERO_ES_MAYOR cuando texto es mayor a numeroParaAcertar", () => {
    // Arrange
    const texto : string = "26";
    const resultadoEsperado : modelo.Estado = "EL_NUMERO_ES_MAYOR";


    // Act
    const resultado : string = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería devolver EL_NUMERO_ES_MENOR cuando texto es menor que numeroParaAcertar", () => {
    // Arrange
    const texto : string = "20";
    const resultadoEsperado : modelo.Estado = "EL_NUMERO_ES_MENOR";

    // Act
    const resultado : string = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  describe("numerodeIntentos", () => {
    it("Debería devolver GAME_OVER_MAXIMO_INTENTOS cuando se supera el número de intentos máximo", () => {
      // Arrange
      const numeroIntentos : number = 5;
      const texto : string = "90";
      const resultadoEsperado : modelo.Estado = "GAME_OVER_MAXIMO_INTENTOS";
      vi.spyOn(modelo.partida, "numeroDeIntentos", "get").mockReturnValue(numeroIntentos);

      // Act
      const resultado : string = comprobarNumero(texto);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });
  });

});
