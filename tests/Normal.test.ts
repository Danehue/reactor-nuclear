import Apagado from "../src/estado/Apagado";
import { CambioEstado } from "../src/estado/CambioEstado";
import Critico from "../src/estado/Critico";
import Estado from "../src/estado/Estado";
import Normal from "../src/estado/Normal";
import { mockEstadoSetter as reactorMock } from './mocks/MockEstadoSetter';

describe('Normal', () => {
  let instance: Estado;

  beforeEach(() => {
    instance = new Normal();
  });


  it('instance tiene que ser una instancia de Estado', () => {
    expect(instance instanceof Estado).toBeTruthy();
  });

  it('cambiarEstado() tiene que devolver CambioEstado.NO_CAMBIO', () => {
    expect(instance.cambiarEstado(reactorMock, 329)).toBe(CambioEstado.NO_CAMBIO);
  });
  it('cambiarEstado() no tiene que llamar a seEstado()', () => {
    instance.cambiarEstado(reactorMock, 329)
    expect(reactorMock.setEstado).not.toHaveBeenCalled();
  });
  
  it('cambiarEstado() tiene que devolver CambioEstado.CRITICO', () => {
    expect(instance.cambiarEstado(reactorMock, 330)).toBe(CambioEstado.CRITICO);
  });
  it('cambiarEstado() tiene que llamar a seEstado() con un estado Critico', () => {
    instance.cambiarEstado(reactorMock, 330)
    expect(reactorMock.setEstado).toHaveBeenLastCalledWith(new Critico);
  });

  it('cambiarEstado() tiene que devolver CambioEstado.APAGADO', () => {
    expect(instance.cambiarEstado(reactorMock, 400)).toBe(CambioEstado.APAGADO);
  });
  it('cambiarEstado() tiene que llamar a seEstado() con un estado Apagado', () => {
    instance.cambiarEstado(reactorMock, 400)
    expect(reactorMock.setEstado).toHaveBeenLastCalledWith(new Apagado);
  });


  it('esCambioCritico() tiene que devolver true', () => {
    const cambiarACritico = (instance as any).esCambioCritico;
    expect(cambiarACritico(330)).toBeTruthy();
  });
  it('esCambioApagado() tiene que devolver true', () => {
    const cambiarAApagado = (instance as any).esCambioApagado;
    expect(cambiarAApagado(400)).toBeTruthy();
  });
  it('esCambioCritico() tiene que devolver false', () => {
    const cambiarACritico = (instance as any).esCambioCritico;
    expect(cambiarACritico(329)).toBeFalsy();
  });
  it('esCambioApagado() tiene que devolver false', () => {
    const cambiarAApagado = (instance as any).esCambioApagado;
    expect(cambiarAApagado(329)).toBeFalsy();
  });


  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(280)).toBeCloseTo(100);
  });
  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(330)).toBeCloseTo(700);
  });


});