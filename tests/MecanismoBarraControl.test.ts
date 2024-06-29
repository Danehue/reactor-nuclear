import Barra from "../src/mecanismo/Barra";
import MecanismoBarraDeControl from "../src/mecanismo/MecanismoBarraControl";
import Reactor from "../src/reactor/Reactor";
import * as MOCKS from "./mocks/mocks";

describe('Test clase MecanismoBarraDeControl', () => {

    
    const mecanismo: MecanismoBarraDeControl = new MecanismoBarraDeControl();
    let barras = [new Barra(200), new Barra(200)];
    mecanismo.agregarBarras(barras);

    it('Debería inicializarse con la cantidad utilizada (0)', () => {
        expect(mecanismo.cantUtilizada).toBe(0);
    });

    it('Debería obtener (2) barras del mecanismo', () => {
        expect(mecanismo.barras.length).toBe(2);
    });

    it('Debería obtener la cantidad utilizada (0) correctamente', () => {
        MOCKS.reactor.obtenerTemperatura.mockReturnValue(329);
        mecanismo.enfriar(MOCKS.reactor as any);
        expect(mecanismo.cantUtilizada).toBe(0);
    });

    it('Debería obtener la cantidad utilizada (1) correctamente', () => {
        let reactor: Reactor = new Reactor();
        reactor.setTemperatura(390);
        expect(mecanismo.enfriar(reactor)).toEqual(2);
    });

});