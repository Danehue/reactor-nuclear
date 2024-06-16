import Barra from "./barra";
import MecanismoDeControl from "./mecanismo-de-control";

export default class MecanismoBarraDeControl implements MecanismoDeControl{

    private _barras: Barra[];
    private _cantUtilizada: number;

    constructor(cantUtilizada: number, barras: Barra[]){
        this._barras = barras;
        this._cantUtilizada = cantUtilizada;
    }

    public get barras(): Barra[] {
        return this._barras;
    }
    
    public get cantUtilizada(): number {
        return this._cantUtilizada;
    }

    public agregarBarra(barra: Barra): void {
        this.barras.push(barra);
    }

    public enfriar(reactor: Reactor) {
        
        // TODO Hablar con Nico para que lo haga así.
        const temperatura = reactor.obtenerTemperatura();
        
        if (temperatura <= 330) {
            console.log("El reactor está en condiciones normales. No es necesario enfriar.");
            return;
        }

        let reduccionTotal = 0;
        for (const barra of this.barras) {
            const porcentajeReduccion = barra.getPorcentajeReduccion();
            reduccionTotal += porcentajeReduccion;
            this._cantUtilizada++;
            barra.reducirVidaUtil();
        }

        console.log(`Se han utilizado ${this.cantUtilizada} barras para reducir la energía térmica.`);
    }

}