import { CambioEstado } from "../Estado/CambioEstado";

export default class InfoEstadoReactor {
    private mapaInfo: Map<number, number>;

    public constructor(mapaInfo: Map<number, number>) {
        this.mapaInfo = mapaInfo;
        this.mapaInfo.set(CambioEstado.NORMAL, 0);
        this.mapaInfo.set(CambioEstado.CRITICO, 0);
        this.mapaInfo.set(CambioEstado.APAGADO, 0);
    }
    
    public obtenerInfo(): Map<number, number> {
        return this.mapaInfo;
    }

    public sumarContador(clave: CambioEstado): void {
        let valor = this.mapaInfo.get(clave);

        if (valor != undefined) {
            let nuevoValor = valor + 1;
            this.mapaInfo.set(clave, nuevoValor);
        }
    }
}