import Apagado from "./Apagado";
import { CambioEstado } from "./CambioEstado";
import Critico from "./Critico";
import Estado from "./Estado";
import EstadoSetter from "./EstadoSetter";

export default class Normal extends Estado {
    
    public cambiarEstado(reactor: EstadoSetter, temp: number): CambioEstado {
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
        return CambioEstado.NO_CAMBIO;
    }

    public esCambioCritico(temp: number): boolean {
        return temp >= 330 && temp < 400;
    }

    public esCambioApagado(temp: number): boolean {
        return temp >= 400;
    }
}