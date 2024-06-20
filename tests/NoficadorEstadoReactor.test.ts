import { NotificadorEstadoReactor } from '../src/notificador/notificadorEstadoReactor';
import { Operador } from '../src/notificador/Operadores';
import { Jefe } from '../src/notificador/Jefe';
import { CambioEstado } from '../src/notificador/CambioEstado';
import { Reactor } from '../src/notificador/Reactor';
import { MockMecanismoDeControl } from './mooks/MockMecanismo';

describe('NotificadorEstadoReactor', () => {
    let instance: NotificadorEstadoReactor;
    let mockMecanismo: MockMecanismoDeControl;
    
    beforeEach(() => {
        instance = new NotificadorEstadoReactor
        mockMecanismo = {
            enfriar: jest.fn(),
        };
    });

    it(`instance es instancia del Notificador`, () => {
        expect (instance instanceof NotificadorEstadoReactor).toBeTruthy();
    });

    test('suscribir un Operador', () => {
        const operador = new Operador(mockMecanismo);
        const spySuscribir = jest.spyOn(instance, 'suscribir');

        instance.suscribir(operador);

        expect(operador instanceof Operador).toBeTruthy();
        expect(instance['suscriptores']).toContain(operador);
        expect(spySuscribir).toHaveBeenCalledWith(operador);
        expect(spySuscribir).toHaveBeenCalledTimes(1);

    });

    test('suscribir y desuscribir un Operador', () => {
        const operador = new Operador(mockMecanismo);
        const spySuscribir = jest.spyOn(instance, 'suscribir');
        const spyDesuscribir = jest.spyOn(instance, 'desuscribir');

        instance.suscribir(operador);

        expect(operador instanceof Operador).toBeTruthy();
        expect(instance['suscriptores']).toContain(operador);
        instance.desuscribir(operador);
        expect(instance['suscriptores']).not.toContain(operador);
        expect(spySuscribir).toHaveBeenCalledWith(operador);
        expect(spySuscribir).toHaveBeenCalledTimes(1);
        expect(spyDesuscribir).toHaveBeenCalledWith(operador);
        expect(spyDesuscribir).toHaveBeenCalledTimes(1);
    });

    test('suscribir un Jefe', () => {
        const jefe = new Jefe();
        const spySuscribirJefe = jest.spyOn(instance, 'suscribirJefe');
        instance.suscribirJefe(jefe);
        expect(instance['jefe']).toEqual(jefe);
        expect(spySuscribirJefe).toHaveBeenCalledTimes(1);
    });

    test('desuscribir un Jefe', () => {
        /*const jefe = new Jefe();
        instance.suscribirJefe(jefe);
        expect(instance['jefe']).toEqual(jefe);

        instance.desuscribirJefe();
        expect(instance['jefe']).toBeNull();
        expect(instance.desuscribirJefe).toHaveBeenCalledTimes(1);*/
        const jefe = new Jefe();
        const spySuscribirJefe = jest.spyOn(instance, 'suscribirJefe');
        const spyDesuscribirJefe = jest.spyOn(instance, 'desuscribirJefe');        
        instance.suscribirJefe(jefe);
        expect(instance['jefe']).toEqual(jefe);
        expect(spySuscribirJefe).toHaveBeenCalledTimes(1);
        instance.desuscribirJefe();
        expect(instance['jefe']).toBeNull();
        expect(spyDesuscribirJefe).toHaveBeenCalledTimes(1);
    
    });

    test('notificar a los suscriptores en estado CRITICO', () => {
        const operador = new Operador(mockMecanismo);
        const spyNotificar = jest.spyOn(instance, 'notificar');
        const spyActualizar = jest.spyOn(operador, 'actualizar');
        const reactor = new Reactor();
        instance.suscribir(operador);
        instance.notificar(reactor, CambioEstado.CRITICO);
        expect(spyNotificar).toHaveBeenCalledWith(reactor, CambioEstado.CRITICO);
        expect(spyNotificar).toHaveBeenCalledTimes(1);
        expect(spyActualizar).toHaveBeenCalledWith(reactor);
        expect(spyActualizar).toHaveBeenCalledTimes(1);
    });

    test('notificar al jefe en estado APAGADO', () => {
        const jefe = new Jefe();
        const spyNotificar = jest.spyOn(instance, `notificar`);
        const spyActualizar = jest.spyOn(jefe, 'actualizar');
        const reactor = new Reactor();
        instance.suscribirJefe(jefe);
        instance.notificar(reactor, CambioEstado.APAGADO);
        expect(instance.notificar).toHaveBeenCalledWith(reactor, CambioEstado.APAGADO);
        expect(instance.notificar).toHaveBeenCalledTimes(1);
        expect(spyActualizar).toHaveBeenCalledTimes(1);
    });
});
