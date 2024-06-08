import { CambioEstado } from "./CambioEstado";
import Estado from "./Estado";
import EstadoSetter from "./EstadoSetter";
import Normal from "./Normal";

export default class Apagado extends Estado{
    
    public cambiarEstado(temp: number, e: EstadoSetter): CambioEstado {
        if (this.cambiarANormal(temp)) {
            let nuevoEstado: Estado = new Normal();
            e.setEstado(nuevoEstado);
            return CambioEstado.NORMAL;
        }
        return CambioEstado.No_CAMBIO;
    }

    public producir(temp: number): number {
        return 0;
    }

    private cambiarANormal(temp: number): boolean {
        return temp < 330;
    }
}