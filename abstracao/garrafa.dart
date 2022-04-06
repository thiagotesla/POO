class Garrafa{
    int _total = 0;
    int altura = 0;
    int largura = 0;
    int comprimento = 0;

    void abrir() { }
    void fechar() { }   
    void encher(){
        while(_total < capacidade)
            _total++;
    }
}