import Reactor from '../src/reactor/Reactor';
import Estado from '../src/Estado/Estado';
import Sensor from '../src/reactor/Sensor';
import MecanismoDeControl from '../src/mecanismo/MecanismoDeControl';
import { NotificadorEstadoReactor } from '../src/notificador/NotificadorEstadoReactor';
import InfoEstadoReactor from '../src/reactor/InfoEstadoReactor';
import { CambioEstado } from '../src/Estado/CambioEstado';
import * as MOCKS from './mocks/mocks';

describe('Test clase Reactor', () => {
    let reactor: Reactor;

    beforeEach(() => {
        // Crear una nueva instancia de Reactor utilizando el mocker
        reactor = new Reactor(MOCKS.reactor.capacidad, MOCKS.estadoNormal as Estado);

        // Asignar las dependencias desde el mocker
        /* reactor.sensor = MOCKS.reactor.sensor as Sensor;
        reactor.mecanismoDeControl = MOCKS.mecanismo as MecanismoDeControl;
        reactor.notificador = MOCKS.reactor.notificador as NotificadorEstadoReactor;
        reactor.info = MOCKS.reactor.info as InfoEstadoReactor; */
    });

    it('Instancia correcta de Reactor', () => {
        expect(reactor instanceof Reactor).toBeTruthy();
    });

    /* it('Producir', () => {
        reactor.producir();
        expect(MOCKS.reactor.estado.producir).toHaveBeenCalledWith(reactor.sensor.temperatura);
    }); */

    /* it('Cambiar Estado', () => {
        const temperatura = 50;
        reactor.cambiarEstado(temperatura);
        expect(MOCKS.reactor.estado.cambiarEstado).toHaveBeenCalledWith(reactor, temperatura);
        expect(MOCKS.reactor.info.sumarContador).toHaveBeenCalledWith(CambioEstado.NORMAL);
        expect(MOCKS.reactor.notificador.notificar).toHaveBeenCalledWith(reactor, CambioEstado.NORMAL);
    });

    it('Obtener Temperatura', () => {
        const temperatura = reactor.obtenerTemperatura();
        expect(temperatura).toEqual(MOCKS.reactor.sensor.temperatura);
    });

    it('Set Temperatura', () => {
        const nuevaTemperatura = 75;
        reactor.setTemperatura(nuevaTemperatura);
        expect(MOCKS.reactor.sensor.temperatura).toEqual(nuevaTemperatura);
    }); */

});