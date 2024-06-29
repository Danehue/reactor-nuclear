import Barra from "./Barra";
import MecanismoDeControl from "./MecanismoDeControl";
import Reactor from "../reactor/Reactor";

export default class MecanismoBarraDeControl implements MecanismoDeControl{

    private _barras: Barra[];
    private _cantUtilizada: number;

    constructor(){
        this._barras = [];
        this._cantUtilizada = 0;
    }

    public get barras(): Barra[] {
        return this._barras;
    }
    
    public get cantUtilizada(): number {
        return this._cantUtilizada;
    }

    public agregarBarras(barras: Barra[]): void {
        barras.forEach(barra => this.barras.push(barra));
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
            const tempFinal = tempReactor * (1 - porcentajeReduccion / 100);

            reactor.setTemperatura(tempFinal);

            tempReactor = reactor.obtenerTemperatura();

            // Ver con los chicos  
            if(tempReactor <= 330){
                break;
            }
            
        }
        return this.cantUtilizada;
    }

}