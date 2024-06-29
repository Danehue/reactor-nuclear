import Apagado from "../src/estado/Apagado";
import { CambioEstado } from "../src/estado/CambioEstado";
import Critico from "../src/estado/Critico";
import Estado from "../src/estado/Estado";
import Normal from "../src/estado/Normal";
import { mockEstadoSetter as reactorMock } from './mocks/MockEstadoSetter';

describe('Normal', () => {
  let instance: Normal;

  beforeEach(() => {
    instance = new Normal();
  });


  it('instance tiene que ser una instancia de Estado', () => {
    expect(instance instanceof Estado).toBeTruthy();
  });

  it('cambiarEstado() tiene que devolver CambioEstado.NO_CAMBIO', () => {
    expect(instance.cambiarEstado(reactorMock, 329)).toEqual(CambioEstado.NO_CAMBIO);
  });
  it('cambiarEstado() no tiene que llamar a seEstado()', () => {
    instance.cambiarEstado(reactorMock, 329)
    expect(reactorMock.setEstado).not.toHaveBeenCalled();
  });
  
  it('cambiarEstado() tiene que devolver CambioEstado.CRITICO', () => {
    expect(instance.cambiarEstado(reactorMock, 330)).toEqual(CambioEstado.CRITICO);
  });
  it('cambiarEstado() tiene que llamar a seEstado() con un estado Critico', () => {
    instance.cambiarEstado(reactorMock, 330)
    expect(reactorMock.setEstado).toHaveBeenLastCalledWith(new Critico);
  });

  it('cambiarEstado() tiene que devolver CambioEstado.APAGADO', () => {
    expect(instance.cambiarEstado(reactorMock, 400)).toEqual(CambioEstado.APAGADO);
  });
  it('cambiarEstado() tiene que llamar a seEstado() con un estado Apagado', () => {
    instance.cambiarEstado(reactorMock, 400)
    expect(reactorMock.setEstado).toHaveBeenLastCalledWith(new Apagado);
  });


  it('esCambioCritico() tiene que devolver true', () => {
    expect(instance.esCambioCritico(330)).toBeTruthy();
  });
  it('esCambioApagado() tiene que devolver true', () => {
    expect(instance.esCambioApagado(400)).toBeTruthy();
  });
  it('esCambioCritico() tiene que devolver false', () => {
    expect(instance.esCambioCritico(329)).toBeFalsy();
  });
  it('esCambioApagado() tiene que devolver false', () => {
    expect(instance.esCambioApagado(329)).toBeFalsy();
  });


  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(280)).toBeCloseTo(100);
  });
  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(330)).toBeCloseTo(700);
  });


});