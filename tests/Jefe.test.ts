import { Jefe } from '../src/notificador/Jefe';

describe('Jefe', () => {
    let instance: Jefe;

    beforeEach(() => {
        instance = new Jefe();
    });
      
    it('instance tiene que ser una instancia de Jefe', () => {
        expect(instance instanceof Jefe).toBeTruthy();
    });

    it('llamada a actualizar', () => {
        const actualizarMock = jest.spyOn(instance, 'actualizar');

        instance.actualizar();

        expect(actualizarMock).toHaveBeenCalledTimes(1);

    });
});
