import Reactor from '../src/reactor/Reactor';
import Estado from '../src/estado/Estado';
import Sensor from '../src/reactor/Sensor';
import MecanismoDeControl from '../src/mecanismo/MecanismoDeControl';
import { NotificadorEstadoReactor } from '../src/notificador/NotificadorEstadoReactor';
import InfoEstadoReactor from '../src/reactor/InfoEstadoReactor';
import { CambioEstado } from '../src/estado/CambioEstado';
import * as MOCKS from './mocks/mocks';
import Normal from '../src/estado/Normal';

describe('Test clase Reactor', () => {
    let reactor: Reactor;

    beforeEach(() => {
        reactor = new Reactor();        
    });

    it('Instancia correcta de Reactor', () => {
        expect(reactor instanceof Reactor).toBeTruthy();
    });

    it('Producir deberia producir en base a las horas solicitadas', () => {
        reactor.setTemperatura(280);
        expect(reactor.producir(5)).toEqual(100*5);
        reactor.setTemperatura(350);
        let resultado = ((12*350 - 3260)*0.2)*5;
        expect(reactor.producir(5)).toBeCloseTo(resultado);
        reactor.setTemperatura(400);
        expect(reactor.producir(5)).toEqual(0);
    }); 

    it('Cambiar Estado deberia sumar al contador de Normal', () => {
        const spySumarContador = jest.spyOn(reactor.info, 'sumarContador');
        reactor.cambiarEstado(280);
        expect(spySumarContador).toHaveBeenLastCalledWith(CambioEstado.NORMAL);
    });
    it('Cambiar Estado deberia sumar al contador de Critico', () => {
        const spySumarContador = jest.spyOn(reactor.info, 'sumarContador');
        reactor.cambiarEstado(0);
        reactor.cambiarEstado(380);
        expect(spySumarContador).toHaveBeenLastCalledWith(CambioEstado.CRITICO);
    });
    it('Cambiar Estado deberia sumar al contador de Apagado', () => {
        const spySumarContador = jest.spyOn(reactor.info, 'sumarContador');
        reactor.cambiarEstado(280);
        reactor.cambiarEstado(400);
        expect(reactor.info['sumarContador']).toHaveBeenLastCalledWith(CambioEstado.APAGADO);
    });

    it('Obtener Temperatura', () => {
        const nuevaTemperatura = 75;
        reactor.setTemperatura(nuevaTemperatura);
        
        expect(reactor.obtenerTemperatura()).toEqual(nuevaTemperatura);
    });

    it('Iniciar deberia iniciar el reactor si la tremperatura es menor a 330', () => {
        const spySetEstado = jest.spyOn(reactor, 'setEstado');
        reactor.setTemperatura(329);
        reactor.iniciar();
        expect(spySetEstado).toHaveBeenLastCalledWith(new Normal());
    });
    it('Iniciar deberia no iniciar el reactor por exceso de temperatura', () => {
        const spySetEstado = jest.spyOn(reactor, 'setEstado');
        reactor.setTemperatura(400);
        reactor.iniciar();
        expect(spySetEstado).toHaveBeenCalledTimes(0);
    });



});