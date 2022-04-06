public class Garrafa
{
    public virtual void finalidade()
    {
        Console.WriteLine("Garrafa genêrica");
    }

}

public class GarrafaTermica : Garrafa
{
    public virtual void finalidade()
    {
        Console.WriteLine("Manter temperatura");
    }

}

public class GarrafaVidro : Garrafa
{
    public virtual void finalidade()
    {
        Console.WriteLine("Manter o sabor");
    }

}

public class Barril : Garrafa
{
    public virtual void finalidade()
    {
        Console.WriteLine("armazenar grandes quantidades");
    }

}
