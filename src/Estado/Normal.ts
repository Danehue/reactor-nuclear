import { CambioEstado } from "./CambioEstado";
import Critico from "./Critico";
import Estado from "./Estado";
import EstadoSetter from "./EstadoSetter";

export default class Normal extends Estado {
    
    public cambiarEstado(temp: number, e: EstadoSetter): CambioEstado {
        if (this.cambiarACritico(temp)) {
            let nuevoEstado: Estado = new Critico();
            e.setEstado(nuevoEstado);
            return CambioEstado.CRITICO;
        }
        return CambioEstado.No_CAMBIO;
    }
    
    private cambiarACritico(temp: number): boolean {
        return temp > 330 && temp < 400;
    }
}