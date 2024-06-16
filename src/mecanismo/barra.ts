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
        return (this._vidaUtil / 3600) * 100;
    }

    public reducirVidaUtil(): void {
        this.vidaUtil -= 1;
        if (this.vidaUtil < 0) {
            this.vidaUtil = 0;
        }
    }

}