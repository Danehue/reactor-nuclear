import Barra from "../src/mecanismo/Barra";
import MecanismoBarraDeControl from "../src/mecanismo/MecanismoBarraControl";
import * as MOCKS from "./mocks/mocks";

describe('Test clase MecanismoBarraDeControl', () => {

    it('Debería inicializarse con la cantidad utilizada (0) y barras (2) correctamente', () => {
        const barras = [new Barra(200), new Barra(200)];
        const mecanismo = new MecanismoBarraDeControl(0, barras);
        expect(mecanismo.cantUtilizada).toBe(0);
        expect(mecanismo.barras.length).toBe(2);
    });

    it('Debería obtener (1) barras del mecanismo', () => {
        const barras = [new Barra(200)];
        const mecanismo = new MecanismoBarraDeControl(0, barras);
        expect(mecanismo.barras).toBe(barras);
    });

    it('Debería obtener la cantidad utilizada (5) correctamente', () => {
        const mecanismo = new MecanismoBarraDeControl(5, []);
        expect(mecanismo.cantUtilizada).toBe(5);
    });

    it('Debería agregar una barra correctamente', () => {
        const mecanismo = new MecanismoBarraDeControl(0, []);
        const nuevaBarra = new Barra(200);
        mecanismo.agregarBarra(nuevaBarra);
        expect(mecanismo.barras.length).toBe(1);
        expect(mecanismo.barras[0]).toBe(nuevaBarra);
    });

    it('No debería enfriar si la temperatura es menor o igual a 330', () => {
        const barras = [new Barra(200)];
        const mecanismo = new MecanismoBarraDeControl(0, barras);

        MOCKS.reactor.obtenerTemperatura.mockReturnValue(330);

        mecanismo.enfriar(MOCKS.reactor as any);
        expect(mecanismo.cantUtilizada).toBe(0);
        expect(MOCKS.reactor.setTemperatura).not.toHaveBeenCalled();
    });

    it('Debería enfriar correctamente si la temperatura es mayor a 330', () => {
        const barra1 = new Barra(200);
        const barra2 = new Barra(200);
        const barras = [barra1, barra2];
        const mecanismo = new MecanismoBarraDeControl(0, barras);

        MOCKS.reactor.obtenerTemperatura.mockReturnValue(400);
        
        mecanismo.enfriar(MOCKS.reactor as any);
        expect(mecanismo.cantUtilizada).toBe(2);
        expect(barra1.vidaUtil).toBe(0);
        expect(barra2.vidaUtil).toBe(0);
        expect(MOCKS.reactor.setTemperatura).toHaveBeenCalled();
    });
});