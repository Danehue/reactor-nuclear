import Apagado from "./Apagado";
import { CambioEstado } from "./CambioEstado";
import Estado from "./Estado";
import EstadoSetter from "./EstadoSetter";
import Normal from "./Normal";

export default class Critico extends Estado {

    private prcReduccion: number = 0.2;
    
    public cambiarEstado(temp: number, reactor: EstadoSetter): CambioEstado {
        if (this.esCambioNormal(temp)) {
            let nuevoEstado: Estado = new Normal();
            reactor.setEstado(nuevoEstado);
            return CambioEstado.NORMAL;
        }
        if (this.esCambioApagado(temp)) {
            let nuevoEstado: Estado = new Apagado();
            reactor.setEstado(nuevoEstado);
            return CambioEstado.APAGADO;
        }
        return CambioEstado.No_CAMBIO;
    }

    public producir(temp: number): number {
        return super.producir(temp) * this.prcReduccion;
    }

    private esCambioNormal(temp: number): boolean {
        return temp < 330;
    }
    private esCambioApagado(temp: number): boolean {
        return temp >= 400;
    }

}