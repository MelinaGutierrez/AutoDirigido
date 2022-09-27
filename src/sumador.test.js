import Auto from "./sumador.js";

let auto
describe("mover auto", () => {
  beforeEach(() => {
    auto = new Auto();
  });
  it("Muestra la posicion inicial 0,0N", () => {
    expect(auto.ejecutar("")).toEqual("0,0N");
  });
  it("Direccion a Arriba", () => {
    expect(auto.ejecutar("A")).toEqual("0,1N");
  });
  it("Direccion a la derecha", () => {
    expect(auto.ejecutar("D")).toEqual("0,0E");
  });
  it("Direccion a la izquierda", () => {
    expect(auto.ejecutar("I")).toEqual("0,0O");
  });
  it("Avanza en direccion al Norte", () => {
    expect(auto.ejecutar("AAA")).toEqual("0,3N");
  });
  it("Avanza en direecion a este", () => {
    expect(auto.ejecutar("ADAA")).toEqual("2,1E");
  });
  it("Avanza hacia el oeste", () => {
    expect(auto.ejecutar("ADAAIIAA")).toEqual("0,1O");
  });
  it("Avanza hacia el sur", () => {
    expect(auto.ejecutar("AIIA")).toEqual("0,0S");
  });
});