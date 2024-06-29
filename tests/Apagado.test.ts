import { CambioEstado } from "../src/Estado/CambioEstado";
import Estado from "../src/Estado/Estado";
import Apagado from "../src/Estado/Apagado";
import { mockEstadoSetter as reactorMock } from './mocks/MockEstadoSetter';
import Normal from "../src/Estado/Normal";

describe('Apagado', () => {
  let instance: Estado;

  beforeEach(() => {
    instance = new Apagado();
  });

  it('instance tiene que ser una instancia de Estado', () => {
    expect(instance instanceof Estado).toBeTruthy();
  });

  it('cambiarEstado() tiene que devolver CambioEstado.No_CAMBIO', () => {
    expect(instance.cambiarEstado(reactorMock, 330)).toBe(CambioEstado.NO_CAMBIO);
  });
  it('cambiarEstado() no tiene que llamar a seEstado()', () => {
    instance.cambiarEstado(reactorMock,330)
    expect(reactorMock.setEstado).not.toHaveBeenCalled();
  });

  it('cambiarEstado() tiene que devolver CambioEstado.NO_CAMBIO', () => {
    expect(instance.cambiarEstado(reactorMock,400)).toBe(CambioEstado.NO_CAMBIO);
  });
  it('cambiarEstado() no tiene que llamar a seEstado()', () => {
    instance.cambiarEstado(reactorMock,400)
    expect(reactorMock.setEstado).not.toHaveBeenCalled();
  });

  it('cambiarEstado() tiene que devolver CambioEstado.NORMAL', () => {
    expect(instance.cambiarEstado(reactorMock,329)).toBe(CambioEstado.NORMAL);
  });  
  it('cambiarEstado() tiene que llamar a seEstado() con un estado Normal', () => {
    instance.cambiarEstado(reactorMock, 329)
    expect(reactorMock.setEstado).toHaveBeenLastCalledWith(new Normal);
  });

  

  it('esCambioNormal() tiene que devolver true', () => {
    const cambiarANormal = (instance as any).esCambioNormal;
    expect(cambiarANormal(329)).toBeTruthy();
  });
  it('esCambioNormal() tiene que devolver false', () => {
    const cambiarANormal = (instance as any).esCambioNormal;
    expect(cambiarANormal(330)).toBeFalsy();
  });


  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(280)).toBeCloseTo(0);
  });
  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(330)).toBeCloseTo(0);
  });
  
});