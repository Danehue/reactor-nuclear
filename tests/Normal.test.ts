import Apagado from "../src/Estado/Apagado";
import { CambioEstado } from "../src/Estado/CambioEstado";
import Critico from "../src/Estado/Critico";
import Estado from "../src/Estado/Estado";
import Normal from "../src/Estado/Normal";
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
    expect(instance.cambiarEstado(329, reactorMock)).toBe(CambioEstado.No_CAMBIO);
  });
  it('cambiarEstado() no tiene que llamar a seEstado()', () => {
    instance.cambiarEstado(329, reactorMock)
    expect(reactorMock.setEstado).not.toHaveBeenCalled();
  });
  
  it('cambiarEstado() tiene que devolver CambioEstado.CRITICO', () => {
    expect(instance.cambiarEstado(330, reactorMock)).toBe(CambioEstado.CRITICO);
  });
  it('cambiarEstado() tiene que llamar a seEstado() con un estado Critico', () => {
    instance.cambiarEstado(330, reactorMock)
    expect(reactorMock.setEstado).toHaveBeenLastCalledWith(new Critico);
  });

  it('cambiarEstado() tiene que devolver CambioEstado.APAGADO', () => {
    expect(instance.cambiarEstado(400, reactorMock)).toBe(CambioEstado.APAGADO);
  });
  it('cambiarEstado() tiene que llamar a seEstado() con un estado Apagado', () => {
    instance.cambiarEstado(400, reactorMock)
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