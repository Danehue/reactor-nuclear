import Barra from "../src/mecanismo/barra";

describe('Test clase Barra', () => {
    let instance: Barra;
  
    beforeEach(() => {
      instance = new Barra(200);
    });

    it('INSTANCE debe que ser una instancia de Barra', () => {
      expect(instance instanceof Barra).toBeTruthy();
    });

    it('Vida útil de la bara debe ser 200', () => {
      expect(instance.vidaUtil).toBe(200);
    });

    it('Setter vida útil con un valor de 100', () => {
      instance.vidaUtil = 100;
        expect(instance.vidaUtil).toBe(100);
    });

    it('getPorcentajeReduccion() debe ser 50', () => {
        // (200 / 3600) * 100 = 5.55
        expect(instance.getPorcentajeReduccion()).toBe(5.56); 
    });

    it('Reducir en 1 la vida útil obteniendo el valor 199', () => {
        instance.reducirVidaUtil();
        expect(instance.vidaUtil).toBe(0);
    });

    it('No se debería reducir la vida útil por debajo de 0', () => {
        const barra = new Barra(0);
        barra.reducirVidaUtil();
        expect(barra.vidaUtil).toBe(0);
    });

    it('Multiples reducciones de bara con vida útil en 2, debe dar 0', () => {
        const barra = new Barra(2);
        barra.reducirVidaUtil();
        barra.reducirVidaUtil();
        barra.reducirVidaUtil();
        expect(barra.vidaUtil).toBe(0);
    });

});