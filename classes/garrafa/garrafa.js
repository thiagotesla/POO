class Garrafa {
    constructor(altura, largura, capacidade) {
        this._total = 0;
        this.altura = altura
        this.largura = largura
        this.capacidade = capacidade
    }

    abrir() { }
    fechar() { }
    encher(){
        while(this._total < this.capacidade)
            this._total++;
    }
}
