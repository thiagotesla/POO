class Garrafa {
    altura: number;
    largura: number;
    capacidade: number;

    private _total: number = 0;

    constructor(
        altura: number,
        largura: number,
        capacidade: number,
    ) {
        this.altura = altura;
        this.largura = largura;
        this.capacidade = capacidade;
    }

    abrir() { }
    fechar() { }
    encher(){
        while(this._total < this.capacidade)
            this._total++;
    }
}