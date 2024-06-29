import Apagado from "./Apagado";
import { CambioEstado } from "./CambioEstado";
import Estado from "./Estado";
import EstadoSetter from "./EstadoSetter";
import Normal from "./Normal";

export default class Critico extends Estado {

    private prcReduccion: number = 0.2;
    
    public cambiarEstado(reactor: EstadoSetter, temp: number): CambioEstado {
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
        return CambioEstado.NO_CAMBIO;
    }

    public producir(temp: number): number {
        return super.producir(temp) * this.prcReduccion;
    }

    public esCambioNormal(temp: number): boolean {
        return temp < 330;
    }
    public esCambioApagado(temp: number): boolean {
        return temp >= 400;
    }

}