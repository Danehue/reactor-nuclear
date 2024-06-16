import Apagado from "./Apagado";
import { CambioEstado } from "./CambioEstado";
import Critico from "./Critico";
import Estado from "./Estado";
import EstadoSetter from "./EstadoSetter";

export default class Normal extends Estado {
    
    public cambiarEstado(temp: number, reactor: EstadoSetter): CambioEstado {
        if (this.esCambioCritico(temp)) {
            let nuevoEstado: Estado = new Critico();
            reactor.setEstado(nuevoEstado);
            return CambioEstado.CRITICO;
        }
        if (this.esCambioApagado(temp)) {
            let nuevoEstado: Estado = new Apagado();
            reactor.setEstado(nuevoEstado);
            return CambioEstado.APAGADO;
        }
        return CambioEstado.No_CAMBIO;
    }
    
    private esCambioCritico(temp: number): boolean {
        return temp >= 330 && temp < 400;
    }

    private esCambioApagado(temp: number): boolean {
        return temp >= 400;
    }
}