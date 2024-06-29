import Barra from "./Barra";
import MecanismoDeControl from "./MecanismoDeControl";
import Reactor from "../reactor/Reactor";

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
        
        let reduccionTotal = 0;
        let tempReactor = reactor.obtenerTemperatura();

        // Ver con los chicos
        if(tempReactor <= 330){
            return;
        }
        
        for (const barra of this.barras) {
            const porcentajeReduccion = barra.getPorcentajeReduccion();
            reduccionTotal += porcentajeReduccion;
            this._cantUtilizada++;
            barra.reducirVidaUtil();
            const tempFinal = tempReactor * (1 - porcentajeReduccion);

            reactor.setTemperatura(tempFinal);

            tempReactor = reactor.getTemperatura()

            // Ver con los chicos  
            if(tempReactor <= 330){
                break;
            }
            
        }

        console.log(`Se han utilizado ${this.cantUtilizada} barras para reducir la energía térmica.`);
    }

}