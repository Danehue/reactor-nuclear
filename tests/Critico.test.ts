import { CambioEstado } from "../src/Estado/CambioEstado";
import Estado from "../src/Estado/Estado";
import Critico from "../src/Estado/Critico";
import { mockEstadoSetter } from './mocks/MockEstadoSetter';

describe('Critico', () => {
  let instance: Estado;

  beforeEach(() => {
    instance = new Critico();
  });

  it('instance tiene que ser una instancia de Estado', () => {
    expect(instance instanceof Estado).toBeTruthy();
  });

  it('cambiarEstado() tiene que devolver CambioEstado.No_CAMBIO', () => {
    expect(instance.cambiarEstado(330, mockEstadoSetter)).toBe(CambioEstado.No_CAMBIO);
  });

  it('cambiarEstado() tiene que devolver CambioEstado.APAGADO', () => {
    expect(instance.cambiarEstado(400, mockEstadoSetter)).toBe(CambioEstado.APAGADO);
  });

  it('cambiarEstado() tiene que devolver CambioEstado.NORMAL', () => {
    expect(instance.cambiarEstado(329, mockEstadoSetter)).toBe(CambioEstado.NORMAL);
  });

  it('cambiarANormal() tiene que devolver true', () => {
    const cambiarANormal = (instance as any).cambiarANormal;
    expect(cambiarANormal(329)).toBeTruthy();
  });
  it('cambiarAApagado() tiene que devolver true', () => {
    const cambiarAApagado = (instance as any).cambiarAApagado;
    expect(cambiarAApagado(400)).toBeTruthy();
  });
  it('cambiarANormal() tiene que devolver false', () => {
    const cambiarANormal = (instance as any).cambiarANormal;
    expect(cambiarANormal(330)).toBeFalsy();
  });
  it('cambiarAApagado() tiene que devolver false', () => {
    const cambiarAApagado = (instance as any).cambiarAApagado;
    expect(cambiarAApagado(399)).toBeFalsy();
  });


  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(280)).toBeCloseTo(100 * .2);
  });
  it('producir() produce en base a la tabla de produccion', () => {
    expect(instance.producir(330)).toBeCloseTo(700 * .2);
  });
  
});