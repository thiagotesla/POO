public class Garrafa
{
    private int Total = 0;
    public int Altura { get; set; }
    public int Largura { get; set; }
    public int Capacidade { get; set; }

    public void Abrir() { }
    public void Fechar() { }

    private voide Encher(){
        while(Total < Capacidade)
            Total++;
    }
}
