import { CambioEstado } from '../src/estado/CambioEstado';
import InfoEstadoReactor from "../src/reactor/InfoEstadoReactor";

describe('Test clase InfoEstadoReactor', () => {
    let infoEstadoReactor: InfoEstadoReactor;

    beforeEach(() => {
        infoEstadoReactor = new InfoEstadoReactor(new Map<number, number>());
    });

    it('Inicialización correcta del mapa de información', () => {
        const mapaInfo = infoEstadoReactor.obtenerInfo();

        expect(mapaInfo.get(CambioEstado.NORMAL)).toEqual(0);
        expect(mapaInfo.get(CambioEstado.CRITICO)).toEqual(0);
        expect(mapaInfo.get(CambioEstado.APAGADO)).toEqual(0);
    });

    it('Sumar contador para CambioEstado.NORMAL', () => {
        infoEstadoReactor.sumarContador(CambioEstado.NORMAL);
        const mapaInfo = infoEstadoReactor.obtenerInfo();

        expect(mapaInfo.get(CambioEstado.NORMAL)).toEqual(1);
        expect(mapaInfo.get(CambioEstado.CRITICO)).toEqual(0);
        expect(mapaInfo.get(CambioEstado.APAGADO)).toEqual(0);
    });

    it('Sumar contador para CambioEstado.CRITICO', () => {
        infoEstadoReactor.sumarContador(CambioEstado.CRITICO);
        const mapaInfo = infoEstadoReactor.obtenerInfo();

        expect(mapaInfo.get(CambioEstado.NORMAL)).toEqual(0);
        expect(mapaInfo.get(CambioEstado.CRITICO)).toEqual(1);
        expect(mapaInfo.get(CambioEstado.APAGADO)).toEqual(0);
    });

    it('Sumar contador para CambioEstado.APAGADO', () => {
        infoEstadoReactor.sumarContador(CambioEstado.APAGADO);
        const mapaInfo = infoEstadoReactor.obtenerInfo();

        expect(mapaInfo.get(CambioEstado.NORMAL)).toEqual(0);
        expect(mapaInfo.get(CambioEstado.CRITICO)).toEqual(0);
        expect(mapaInfo.get(CambioEstado.APAGADO)).toEqual(1);
    });

    it('Sumar contador varias veces para el mismo estado', () => {
        infoEstadoReactor.sumarContador(CambioEstado.NORMAL);
        infoEstadoReactor.sumarContador(CambioEstado.NORMAL);
        infoEstadoReactor.sumarContador(CambioEstado.NORMAL);
        const mapaInfo = infoEstadoReactor.obtenerInfo();

        expect(mapaInfo.get(CambioEstado.NORMAL)).toEqual(3);
        expect(mapaInfo.get(CambioEstado.CRITICO)).toEqual(0);
        expect(mapaInfo.get(CambioEstado.APAGADO)).toEqual(0);
    });

});
