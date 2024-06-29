export default class Barra{

    private _vidaUtil: number;

    constructor(vidaUtil: number){
        this._vidaUtil = vidaUtil;
    }

    public get vidaUtil(): number {
        return this._vidaUtil;
    }
    
    public set vidaUtil(value: number) {
        this._vidaUtil = value;
    }

    public getPorcentajeReduccion(){
        return parseFloat(((this._vidaUtil / 3600) * 100).toFixed(2));
    }

    public reducirVidaUtil(): void {
        this.vidaUtil = 0;
    }

}