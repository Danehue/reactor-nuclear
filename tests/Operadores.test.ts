import { Operador } from '../src/notificador/Operadores';
import  Reactor  from '../src/reactor/Reactor';
import * as MOCKS from "./mocks/mocks";

describe('Test clase Operador', () => {
    const reactorMock = new Reactor(100, MOCKS.estadoNormal as any);
    let instance: Operador;

    beforeEach(() => {
        instance = new Operador(MOCKS.mecanismo);
    });

    it('Instancia correcta de operador', () => {
        expect(instance instanceof Operador).toBeTruthy();
    });

    it('Llamada a enfriar', () => {
        const reactorMock = MOCKS.reactor as Reactor;
        instance.actualizar(reactorMock);
        expect(MOCKS.mecanismo.enfriar).toHaveBeenCalledWith(reactorMock);
        expect(MOCKS.mecanismo.enfriar).toHaveBeenCalledTimes(1);
    });
});
