import { CambioEstado } from "../src/Estado/CambioEstado";
import Estado from "../src/Estado/Estado";
import Normal from "../src/Estado/Normal";
import { mockEstadoSetter } from './mocks/MockEstadoSetter';

describe('Normal', () => {
  let instance: Estado;

  beforeEach(() => {
    instance = new Normal();
  });


  it('instance tiene que ser una instancia de Estado', () => {
    expect(instance instanceof Estado).toBeTruthy();
  });
  it('cambiarEstado() tiene que devolver CambioEstado.CRITICO', () => {
    expect(instance.cambiarEstado(330, mockEstadoSetter)).toBe(CambioEstado.CRITICO);
  });
  it('cambiarEstado() tiene que devolver CambioEstado.APAGADO', () => {
    expect(instance.cambiarEstado(400, mockEstadoSetter)).toBe(CambioEstado.APAGADO);
  });
  it('cambiarEstado() tiene que devolver CambioEstado.NO_CAMBIO', () => {
    expect(instance.cambiarEstado(329, mockEstadoSetter)).toBe(CambioEstado.No_CAMBIO);
  });


  it('cambiarACritico() tiene que devolver true', () => {
    const cambiarACritico = (instance as any).cambiarACritico;
    expect(cambiarACritico(330)).toBeTruthy();
  });
  it('cambiarAApagado() tiene que devolver true', () => {
    const cambiarAApagado = (instance as any).cambiarAApagado;
    expect(cambiarAApagado(400)).toBeTruthy();
  });
  it('cambiarACritico() tiene que devolver false', () => {
    const cambiarACritico = (instance as any).cambiarACritico;
    expect(cambiarACritico(329)).toBeFalsy();
  });
  it('cambiarAApagado() tiene que devolver false', () => {
    const cambiarAApagado = (instance as any).cambiarAApagado;
    expect(cambiarAApagado(329)).toBeFalsy();
  });


  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(280)).toBeCloseTo(100);
  });
  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(330)).toBeCloseTo(700);
  });


  
});