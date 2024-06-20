import { Operador } from '../src/notificador/Operadores';
import { MecanismoDeControl } from '../src/notificador/MecanismoDeControl';
import { Reactor } from '../src/notificador/Reactor';

describe('Operador', () => {
    
    const mecanismoMock = {
        enfriar: jest.fn(),
    } as unknown as MecanismoDeControl; 

    const reactorMock = new Reactor();
    let instance: Operador;

    beforeEach(() => {
        instance = new Operador(mecanismoMock);
    });

    it('Instancia correcta de operador', () => {
        expect(instance instanceof Operador).toBeTruthy();
      });

    it('Llamada a enfriar', () => {
        instance.actualizar(reactorMock);

        expect(mecanismoMock.enfriar).toHaveBeenCalledWith(reactorMock);
        expect(mecanismoMock.enfriar).toHaveBeenCalledTimes(1);
    });
});
