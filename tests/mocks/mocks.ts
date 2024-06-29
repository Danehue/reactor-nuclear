import { CambioEstado } from "../../src/estado/CambioEstado";

export const reactor = {
    operadores: [],
    capacidad: 0,
    obtenerTemperatura: jest.fn(),
    producir: jest.fn(),
    detener: jest.fn(),
    cambiarEstado: jest.fn(),
    iniciar: jest.fn(),
    setEstado: jest.fn(),
    getTemperatura: jest.fn(),
    setTemperatura: jest.fn(),
    sensor: {
        _temperatura: 0,
        suscriptor: this,
        get temperatura() {
            return this._temperatura;
        },
        set temperatura(value: number) {
            this._temperatura = value;
            this.notificar();
        },
        notificar: jest.fn()
    },
    mecanismoDeControl: {
        enfriar: jest.fn(),
    },
    notificador: {
        suscriptores: [],
        jefe: null,
        suscribir: jest.fn(),
        suscribirJefe: jest.fn(),
        desuscribir: jest.fn(),
        desuscribirJefe: jest.fn(),
        notificar: jest.fn(),
    },
    info: (() => {
        const mapaInfo = new Map<number, number>([
            [CambioEstado.NORMAL, 0],
            [CambioEstado.CRITICO, 0],
            [CambioEstado.APAGADO, 0],
        ]);
        return {
            obtenerInfo: jest.fn().mockReturnValue(mapaInfo),
            sumarContador: jest.fn((clave: CambioEstado) => {
                let valor = mapaInfo.get(clave);
                if (valor != undefined) {
                    mapaInfo.set(clave, valor + 1);
                }
            }),
        };
    })(),
    estado: {
        _m: 12,
        _b: -3260,
        get m() {
            return this._m;
        },
        get b() {
            return this._b;
        },
        cambiarEstado: jest.fn(),
        producir: jest.fn((temp: number) => 12 * temp - 3260),
    }
} as any;

export const estadoNormal = {
    cambiarEstado: jest.fn(),
    esCambioCritico: jest.fn(),
    esCambioApagado: jest.fn(),
} as any;

export const mecanismo = {
    enfriar: jest.fn(),
} as any;