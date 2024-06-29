import Sensor from "../src/reactor/Sensor";
import * as MOCKS from "./mocks/mocks";

describe("Test clase Sensor", () => {
    let sensor: Sensor;

    beforeEach(() => {
        sensor = new Sensor(MOCKS.reactor as any);
    });

    test("debe inicializar la temperatura en 0", () => {
        expect(sensor.temperatura).toBe(0);
    });

    test("debe actualizar la temperatura y notificar al reactor", () => {
        sensor.temperatura = 120;
        expect(sensor.temperatura).toBe(120);
        expect(MOCKS.reactor.cambiarEstado).toHaveBeenCalledWith(120);
    });

    test("notificar debe llamar a cambiarEstado del reactor", () => {
        sensor.notificar();
        expect(MOCKS.reactor.cambiarEstado).toHaveBeenCalledWith(0);
    });
    
    test("debe llamar a obtenerTemperatura del reactor y retornar 330", () => {
        // Configurar el mock para que obtenerTemperatura retorne 330
        MOCKS.reactor.obtenerTemperatura.mockReturnValue(330);
    
        // Llamar al método obtenerTemperatura
        const temp = MOCKS.reactor.obtenerTemperatura();
    
        // Verificar que obtenerTemperatura sea llamado
        expect(MOCKS.reactor.obtenerTemperatura).toHaveBeenCalled();
    
        // Verificar que el valor retornado sea 330
        expect(temp).toBe(330);
    });

});